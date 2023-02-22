import { countVist } from "@/lib/count";

export default function handler(req, res) {
  res.status(200).json({ success: true, data: countVist() });
}
