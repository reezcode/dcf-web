import formidable from "formidable";
import fs from "fs/promises";
import { NextApiHandler, NextApiRequest } from "next";
import path from "path";

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
    options.uploadDir = path.join(process.cwd(), "/public/uploads/kompetisi");
    options.filename = (name, ext, path, form) => {
      fileName = "bukti" + Date.now().toString() + "_" + path.originalFilename;
      fileUrl = "/uploads/kompetisi/" + fileName;
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
      path.join(process.cwd() + "/public", "/uploads", "/kompetisi")
    );
  } catch (error) {
    await fs.mkdir(
      path.join(process.cwd() + "/public", "/uploads", "/kompetisi")
    );
  }
  await readFile(req, true);
  res.json({ url: fileUrl });
};

export default handler;
