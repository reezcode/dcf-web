import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { generateRandom, hashPassword } from "./hash";

export default async function forgotHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return res.status(409).json({ message: "Email belum terdaftar" });
    }

    const token = "BOBO"; //await hashPassword(generateRandom(12));
    // const updateToken = await prisma.user.update({
    //   where: {
    //     email: email,
    //   },
    //   data: {
    //     reset_token: token,
    //     reset_token_date: new Date(),
    //   },
    // });

    return res.status(201).json({ message: "Token berhasil dikirim" });
  }

  return res.status(405).end();
}
