import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js";

dotenv.config();

const app = express();
const port = 5000;

/* Ini digunakan untuk test koneksi database
try {
  await db.authenticate();
  console.log("Database Connected");
  await Users.sync(); //Ini digunakan untuk membuat table dengan sequelize
} catch (error) {
  console.log(error);
}
*/
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
