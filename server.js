const app = require("./config/express")();
const port = app.get("port");
const fs = require("fs");

app.get("/", (req, res) => {
  return res.send("funciona!");
});

fs.readdirSync("./api/routes").forEach((file) => {
  if (file.endsWith(".js")) {
    import(`./api/routes/${file}`).then((vl) => {
      app.use(`/api/`, vl.default);
    });
  }
});

// import("./api/routes/teste.js").then((vl) => {
//   app.use("/api/teste", vl.default);
// });

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
