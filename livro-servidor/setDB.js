require("dotenv").config();

// AKI seleciona o tipo de conexao
const TIPO_CONEXAO = "2";

const TipoConexao = {
  LOCALHOST_SEM_AUTENTICACAO: "1",
  LOCALHOST_COM_AUTENTICACAO: "2",
  ATLAS_MONGO_COM_AUTENTICACAO: "3",
};

const PORT = process.env.PORT_DB;

const DEF_CONEXAO = TIPO_CONEXAO;

var URL_SELECIONADA = "";

let DB = "";
let USER = "";
let PWD = "";

switch (DEF_CONEXAO) {
  
  case TipoConexao.LOCALHOST_SEM_AUTENTICACAO:
  
    console.log("conexão sem autenticação localhost");
    const URL_MONGO = `mongodb://localhost:${PORT}`;
 
    URL_SELECIONADA = URL_MONGO;
    break;

  case TipoConexao.LOCALHOST_COM_AUTENTICACAO:

    console.log("conexão com autenticação localhost");
    DB = process.env.DATABASE;
    USER = process.env.USER;
    PWD = process.env.PWD;
    const URL_MONGO_USER = `mongodb://${USER}:${PWD}@127.0.0.1:${PORT}/${DB}?authSource=admin`;
 
    URL_SELECIONADA = URL_MONGO_USER;
    break;

  case TipoConexao.ATLAS_MONGO_COM_AUTENTICACAO:

   console.log("conexão atlas mongoDb");
    USER = process.env.USER_ATLAS;
    PWD = process.env.PWD_ATLAS;
    const URL_ATLAS = `mongodb+srv://${USER}:${PWD}@clustersp.gdup60c.mongodb.net/?retryWrites=true&w=majority`;

    URL_SELECIONADA = URL_ATLAS;
    break;
 
}

 

const strconnect = URL_SELECIONADA;
 

module.exports = {
  strconnect,
};
