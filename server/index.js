import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    ong: "Caixinha do bem",
    mensagem: "API funcionando perfeitamente!",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor da API rodando em http://localhost:${PORT}`);
});
