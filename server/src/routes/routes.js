import express from "express";
import { login } from "../controller/authController.js";

const router = express.Router();

// Definindo a rota de login
router.post("/login", login);

export default router;
