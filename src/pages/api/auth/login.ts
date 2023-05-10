import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import { verifyPassword } from './hash';
import { withSessionRoute } from '../../../../lib/config/withSession';

const handler = withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method terlarang tidak boleh digunakan' });
    return;
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email dan password diperlukan' });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !verifyPassword(password, user.password)) {
    res.status(401).json({ message: 'Email atau password salah!' });
    return;
  }

  req.session.user = {
    id: user.id,
    email: user.email,
  }
  await req.session.save();
  res.redirect('/dashboard');
  return res.status(201).json({ message: 'Logged in' });
});

export default handler;
