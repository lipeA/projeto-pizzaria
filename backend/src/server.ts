import express = require("express");
import route = require("./routes");

type Request = express.Request;
type Response = express.Response;

const app = express();
app.use(express.json());
app.use(route);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/teste");
});
