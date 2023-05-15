import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    const dataUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    const data = {
      nama: dataUser?.nama!,
      id_lomba: dataUser?.id_lomba!,
      no_hp: dataUser?.no_hp!,
      asal_sekolah: dataUser?.asal_sekolah!,
      ktm: dataUser?.ktm!,
    };
    return res.status(201).json(data);
  }
  return res.status(405).end();
}
