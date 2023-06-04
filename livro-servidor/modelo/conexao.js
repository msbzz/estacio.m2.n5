require("dotenv").config();
const PORT = process.env.PORT_SERVE;
const { strconnect } = require('../setDB.js') ;

const mongoose = require('mongoose');

  
const banco = mongoose.createConnection(strconnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// connectando
banco.on('open', ()=> {
  console.log(`Porta do servidor ativada em ${PORT},conexão com o banco de dados estabelecida em ` +new Date().toLocaleString()+'.');
});
 
module.exports = banco;
