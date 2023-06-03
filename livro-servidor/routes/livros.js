const livroDao = require("../modelo/livro-dao");
//const Livro = require("../modelo/livro-schema");

const router = require("express").Router();

var express = require("express");
const app = express();
 
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

router.get("/", async (req, res) => {
  try {
    const livros = await livroDao.obterLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error: error });
    return;
  }
});

router.post("/", async (req, res) => {
  const titulo = req.body.titulo;
  const resumo = req.body.resumo;
  const codEditora = req.body.codEditora;
  const autores = req.body.autores;

  if (!titulo) {
    res.status(422).json({ error: "titulo é obrigatório" });
    return;
  }

  //cria um objeto
  const livro = {
    codEditora,
    titulo,
    resumo,
    autores,
  };

  //console.log('dentro do post livro',livro)
  try {
    await livroDao.incluir(livro);
    res.status(201).json({ message: "Livro cadastrado com sucesso" });
    return;
  } catch (error) {
    res.status(500).json({ error: error });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  console.log("req.params.id", id);

  try {
    await livroDao.excluir(id);
    res.status(200).json({ message: "livro removido com sucesso !" });
  } catch (error) {
    res.status(500).json({ error: error });
  }

  return;
});

module.exports = router;
