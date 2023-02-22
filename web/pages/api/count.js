// Reference
// https://vercel.com/guides/loading-static-file-nextjs-api-route
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "count.txt");

export default async function handler(req, res) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const count = parseInt(data, 10);
    await fs.writeFile(filePath, String(count + 1));
    res.status(200).json({ success: true, data: { count } });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: err });
  }
}
