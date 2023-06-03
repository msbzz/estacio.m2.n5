const mongoose= require('mongoose')

const Livro = mongoose.model('livros',{
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
})

module.exports = Livro