
require('dotenv').config()
const mongoose = require('mongoose');

const user_atlas = process.env.USER_ATLAS;
const password_atlas = process.env.PWD_ATLAS;
 
strconnect2 =`mongodb+srv://${user_atlas}:${password_atlas}@clustersp.gdup60c.mongodb.net/?retryWrites=true&w=majority`


const user = process.env.USER;
const password = process.env.PWD;
const database = process.env.DATABASE;

strconnect = `mongodb://${user}:${password}@127.0.0.1:27017/${database}?authSource=admin`;
 
//console.log(strconnect)

const banco = mongoose.createConnection(strconnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// connectando
banco.on('open', ()=> {
  console.log('Porta 3030 ativada, conexão com o banco de dados estabelecida em ' +new Date().toLocaleString()+'.');
});
 
module.exports = banco;
