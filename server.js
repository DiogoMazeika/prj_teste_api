import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import { readdir } from "fs";

// import { port } from './config/default.json';
const port = 8080;
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  return res.send("funciona!");
});

readdir("./api/routes", async (err, files) => {
  const p = [];
  files.forEach((file) => {
    p.push(
      import(`./api/routes/${file}`).then((vl) => {
        app.use(`/api/${file.replace(".js", "")}`, vl.default);
      })
    );
  });

  await Promise.all(p);

  app.use((req, res) => {
    res.sendStatus(404);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
