import { Sequelize } from "sequelize";
const db = new Sequelize("dev_testhpai", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3308,
});
export default db;
