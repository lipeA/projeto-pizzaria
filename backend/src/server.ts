import express = require("express");
import "express-async-errors";
import route = require("./routes");
import cors = require("cors");

type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

const app = express();
app.use(express.json());
app.use(cors());

app.use(route);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/teste");
});
