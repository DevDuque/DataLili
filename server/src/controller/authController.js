import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import axios from "axios";
import User from "../models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega o arquivo .env da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;
export const login = async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        accept: "application/json",
        apitoken: API_TOKEN,
      },
    });

    const data = response.data;

    // Verifica se o e-mail e a senha são válidos
    const userItem = data.items.find(
      (item) =>
        item.email === req.body.email && req.body.password === "DataLili"
    );

    if (!userItem) {
      return res.status(404).json({ message: "Nenhum usuário encontrado." });
    }

    const { name, email, phone, personType } = userItem;

    const user = new User(name, email, phone, personType);

    return res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return res.status(500).json({ message: "Erro ao processar login." });
  }
};
