// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

// Count visits.
export default function handler(req, res) {
  const filePath = path.resolve("./counter.txt");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, String(428739));
  }

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const count = Number(data) + 1;
    fs.writeFileSync(filePath, String(count));
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}
