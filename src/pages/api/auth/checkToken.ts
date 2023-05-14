import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { generateRandom, hashPassword, verifyPassword } from "./hash";

export default async function tokenHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, token } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return res.status(409).json({ message: "Email belum terdaftar" });
    }
    const tokenVerify = await verifyPassword(token, existingUser.reset_token);
    if (tokenVerify) {
      const updateToken = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          reset_token: null,
          date_reset_token: null,
        },
      });
      return res.status(201).json({ message: "Verifikasi token berhasil" });
    } else {
      return res.status(409).json({ message: "Token tidak valid" });
    }
  }

  return res.status(405).end();
}
