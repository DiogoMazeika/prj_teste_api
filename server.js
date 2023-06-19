const app = require("./config/express")();
const port = app.get("port");

app.get('/', (req, res) => {
  return res.send('funciona!');
});

app.get('/:rota', (req, res) => {
  const {params: {rota}} = req
  import(`./api/routes/${rota}.js`).then((vl)=>{
    app.use(`./api/routes/${rota}.js`, vl.default);
  })
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});