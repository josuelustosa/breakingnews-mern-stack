const express = require("express");
const app = express();
const PORT = 3333;
const connectDatabase = require("./src/database/db");

const userRouter = require("./src/routes/user.route");

connectDatabase(); // conectando a base de dados
app.use(express.json()); // a aplicação envia e recebe arquivos do tipo JSON

// ROTAS: método + nome da rota + função (callback)
app.use("/user", userRouter);

app.listen(PORT, () =>
  console.log(`Aplicação Node + Express rodando na porta ${PORT}`)
);
