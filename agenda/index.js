const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  //Parâmetro necessário
  express.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(
    //"mongodb+srv://user:pass@restagendabancodados.jxbrv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado com Sucesso");
    app.listen(3000);
  })
  .catch((error) => {
    console.log("Erro ao estabelecer conexão com o banco de dados");
    console.log(error);
  });

// app.use(
//Parâmetro necessário
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use(express.json()); //Vai criar uma lógica para ler e enviar como resposta o json

// app.listen(3000);
