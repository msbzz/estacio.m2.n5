const Livro= require("./livro-schema");

 
const obterLivros=async ()=>{
    return await Livro.find()
}

const obterUmLivro=async (id)=>{
   return  await Livro.findOne({  _id: id  });
}

const incluir=async(livro)=>{
    return await Livro.create(livro)
}

const excluir=async(id)=>{
    await Livro.deleteOne({_id:id})
}

module.exports = { obterLivros,obterUmLivro, incluir, excluir }