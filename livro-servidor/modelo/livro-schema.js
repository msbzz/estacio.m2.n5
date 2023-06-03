// Importando a conexão com o MongoDB
const banco = require('./conexao');
const { Schema } = require('mongoose');
// Definindo a estrutura JSON do modelo de dados Livro
const LivroSchema = Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
}, { collection: 'livros' });

// Associando o LivroSchema e a coleção livros ao modelo de dados Livro
const Livro = banco.model('Livro', LivroSchema);

// Exportando o modelo Livro no padrão de módulo do JavaScript
module.exports = Livro;
 