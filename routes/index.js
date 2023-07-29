import express from "express";
import {
  getUsers,
  createUsers,
  Login,
  getUsersByid,
  deleteUsersByid,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/api/users", verifyToken, getUsers);
router.post("/api/users", createUsers);
router.get("/api/users/:id", verifyToken, getUsersByid);
router.delete("/api/users/:id", verifyToken, deleteUsersByid);
router.post("/login", Login);

export default router;
