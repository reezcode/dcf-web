import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

var fileUrl = '';

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
    options.uploadDir = path.join(process.cwd(), "/public/uploads");
    options.filename = (name, ext, path, form) => {
      fileName = Date.now().toString() + "_" + path.originalFilename;
      fileUrl = "/uploads/" + fileName;
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
    await fs.readdir(path.join(process.cwd() + "/public", "/uploads"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/uploads"));
  }
  await readFile(req, true);

  // to-do save fileUrl into prisma db

  res.json({ url: fileUrl });
};

export default handler;