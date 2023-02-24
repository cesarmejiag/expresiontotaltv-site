import Visit from "@/db/models/Visit";

/* export default async function handler(req, res) {
  try {
    const result = await Visit.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });

    if (result.length === 0) {
      throw new Error("Can't find last count.");
    }

    const visit = result[0];
    const count = visit.count;

    visit.count = visit.count + 1;
    await visit.save();
    res.status(200).json({ success: true, data: { count } });
  } catch (err) {
    res.status(200).json({ success: false, message: err.message });
  }
} */

export default async function handler(req, res) {
  res.status(200).json({
    success: true,
  });
}
