const path = require("path");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// banco fora do src, em /app/db
const dbPath = path.resolve(__dirname, "../../db/database.sqlite");

console.log("USANDO SQLITE EM:", dbPath);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
});

module.exports = sequelize;