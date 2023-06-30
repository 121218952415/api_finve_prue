const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
// const  {pg} = require ("pg")
config();

const { DB_PASSWORD, DB_USER, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    dialect: "postgres",
    native: false,
    logging: false,
  }
);
async function connectDatabase() {
    try {
      sequelize.sync({ force: false  , alter: true }).then(() => {
        console.log("Postgres sync has been established successfully.");
      });
    } catch (error) {
      console.error("Unable to sync to the database:", error);
    }
  }
  connectDatabase();
 
  

module.exports = sequelize;

