import { Sequelize, DataTypes } from "sequelize";
import mysql2 from "mysql2";

export default async function handler(req, res) {
  // Connect with database.
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.INSTANCE_HOST,
      dialect: "mysql",
      dialectModule: mysql2,
    }
  );

  // Define model.
  const Visit = sequelize.define(
    "Visit",
    { count: { type: DataTypes.DOUBLE } },
    { tableName: "Visits" }
  );

  // Query last count and update.
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
}
