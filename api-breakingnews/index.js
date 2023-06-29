const express = require("express");
const app = express();

const PORT = 3000;

app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Aplicação Node + Express rodando na porta ${PORT}`);
});
