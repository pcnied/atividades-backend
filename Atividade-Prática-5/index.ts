import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado"));

// ATIVIDADE 3

let contador = 0;

app.get("/contador", (request: Request, response: Response) => {
  contador++;
  if (contador > 10) {
    contador = 0;
  }

  return response.send({
    contador,
    msg: contador === 10 ? "Contador chegou a 10" : undefined,
  });
});

// ATIVIDADE 4

app.get("/numeral", (request: Request, response: Response) => {
  const operacao = request.query.operacao;
  let valor = Number(request.query.valor);

  if (operacao == "anterior") {
    valor -= 1;
  } else if (operacao == "proximo") {
    valor += 1;
  }

  return response.send({
    resultado: valor,
  });
});

// ATIVIDADE 5

app.get("/inverter-string", (request: Request, response: Response) => {
  const valor = request.query.valor;

  const retorno = String(valor).split("").reverse().join("");

  return response.send({
    retorno,
  });
});
