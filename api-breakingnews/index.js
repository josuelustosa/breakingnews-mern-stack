const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./src/routes/user.route");

// ROTAS: método + nome da rota + função (callback)
app.use("/soma", userRouter);

app.listen(PORT, () =>
  console.log(`Aplicação Node + Express rodando na porta ${PORT}`)
);
