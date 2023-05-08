import prisma from '../../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nama, email, password, asal_sekolah, event } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'Email sudah terdaftar' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
    data: {
        email,
        nama,
        asal_sekolah,
        password: hashedPassword,
        event,
    }
  });

    return res.status(201).json(user);
  }

  return res.status(405).end();
}

