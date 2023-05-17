import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import { useAuth } from "@/firebase/provider/AuthProvider";
import getDataUser from "@/firebase/auth/getData";

var fileUrl = "";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    var fileName = "";
    options.uploadDir = path.join(process.cwd(), "/public/uploads/userKTM");
    options.filename = (name, ext, path, form) => {
      fileName = "ktm" + Date.now().toString() + "_" + path.originalFilename;
      fileUrl = "/uploads/userKTM/" + fileName;
      return fileName;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(
      path.join(process.cwd() + "/public", "/uploads", "/userKTM")
    );
  } catch (error) {
    await fs.mkdir(
      path.join(process.cwd() + "/public", "/uploads", "/userKTM")
    );
  }
  await readFile(req, true);
  res.json({ url: fileUrl });
};

export default handler;
