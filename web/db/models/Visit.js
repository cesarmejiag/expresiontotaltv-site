import { DataTypes } from "sequelize";
import sequelize from "@/db/connection";

const Visit = sequelize.define(
  "Visit",
  { count: { type: DataTypes.DOUBLE } },
  { tableName: "Visits" }
);
export default Visit;
