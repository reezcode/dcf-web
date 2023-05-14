import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { generateRandom, hashPassword, verifyPassword } from "./hash";

export default async function updateHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { type } = req.body;
    if (type === "resetPassword") {
      const { email, newPassword } = req.body;
      const checkPassword = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!checkPassword) {
        return res.status(409).json({ message: "Email belum terdaftar" });
      }
      const hashedPassword = await hashPassword(newPassword);
      const updatePassword = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: hashedPassword,
        },
      });
      return res.status(201).json({ message: "Password berhasil diubah" });
    }

    return res.status(405).end();
  }
}
