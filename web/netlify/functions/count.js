const { Sequelize, DataTypes } = require("sequelize");
const mysql2 = require("mysql2");

exports.handler = async function (event, context) {
  // Connect with database.
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.INSTANCE_HOST,
      dialect: "mysql",
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
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: { count } }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: false, message: err.message }),
    };
  }
};
