// Reference
// https://vercel.com/guides/loading-static-file-nextjs-api-route
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "count.txt");

export default async function handler(req, res) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    const count = parseInt(data, 10);
    
    fs.writeFileSync(filePath, String(count + 1));
    res.status(200).json({ success: true, data: { count } });
  } else {
    res
      .status(500)
      .json({ success: false, message: "Can't retrieve last count." });
  }
}
