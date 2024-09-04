import { Sequelize } from "sequelize";

const sequelize = new Sequelize("wiki_db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
