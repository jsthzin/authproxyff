const express = require("express");
const app = express();

let savedIP = "sem ip";

app.get("/update-ip", (req, res) => {
  const ip = req.query.ip || req.ip;
  savedIP = ip;
  res.send(`IP atualizado: ${savedIP}`);
});

app.get("/", (req, res) => {
  res.send(savedIP);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor online");
});
