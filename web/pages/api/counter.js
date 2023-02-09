// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

// Count visits.
export default function handler(req, res) {
  const filePath = path.resolve(__dirname, "../../../../db/", "counter.txt");
  let count = 43173;
  let message;

  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      count = Number(data) + 1;
      fs.writeFileSync(filePath, String(count));
      message = "ok";
    } catch (err) {
      console.log(err);
      message = err;
    }
  }
  res.status(200).json({ success: true, count, message });
}
