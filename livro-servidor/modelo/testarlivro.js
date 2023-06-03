const Livro = require('./livro');

// Inserir um livro
const livro1 = new Livro({
  titulo: 'Livro 1',
  codEditora: 1,
  resumo: 'Resumo do Livro 1',
  autores: ['Autor 1', 'Autor 2']
});

livro1.save((err, livroInserido) => {
  if (err) return console.error(err);
  console.log('Livro inserido com sucesso:', livroInserido);
});

// Obter um livro por título
Livro.findOne({ titulo: 'Livro 1' }, (err, livroEncontrado) => {
  if (err) return console.error(err);
  console.log('Livro encontrado:', livroEncontrado);
});
