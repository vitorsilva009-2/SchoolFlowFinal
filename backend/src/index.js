// src/index.js - Versão organizada
import express from "express";
import dotenv from "dotenv";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "./middleware/auth.js";
import cors from "cors";

// Configuração inicial
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5501;

app.use(cors({
  origin: "http://localhost:3000", // endereço do frontend
  credentials: true,              // permite envio de cookies de sessão
}));

// Middleware global
app.use(express.json());

app.all("/api/auth/*path", toNodeHandler(auth));



app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    message: "Bem-vindo ao seu perfil!",
    user: req.user, // Dados vindos do middleware
  });
});

// ... (após dotenv.config())



// Rotas de autenticação do Better Auth
// Isso cria todas as rotas automaticamente!


// Rota de health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "nova cursos rodando",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api/docs",
    },
  });
});

import courseRoutes from "./routes/course.route.js"; // importação

app.use("/api/courses", courseRoutes); // registro no prefixo /api/plans

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});