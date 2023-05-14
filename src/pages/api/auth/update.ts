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
    } else if (type === "regKompetisi") {
      const { email, bukti_pembayaran } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      const { nama, asal_instansi, nilai_ujicoba, nilai_ujian, status } = {
        nama: user?.nama!,
        asal_instansi: user?.asal_sekolah!,
        nilai_ujian: 0,
        nilai_ujicoba: 0,
        status: "NO",
      };
      const kompetisi = await prisma.kompetisi.create({
        data: {
          nama,
          email,
          asal_instansi,
          nilai_ujian,
          nilai_ujicoba,
          bukti_pembayaran,
          status,
        },
      });
      const updateData = await prisma.user.update({
        where: {
          email,
        },
        data: {
          id_lomba: kompetisi.id,
        },
      });
      return res
        .status(201)
        .json({ message: "Pendafataran Kompetisi Berhasil" });
    }
    return res.status(405).end();
  }
}
