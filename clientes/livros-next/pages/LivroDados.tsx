import { useEffect, useState } from "react";

import router from "next/router";

import ControleEditora from "../classes/controle/ControleEditora";

import { Livro } from "../classes/modelo/Livro";
import ControleLivros from "@/classes/controle/ControleLivros";

import { Menu } from "@/componentes/Menu";

import style from "../styles/LivroDados.module.css";

export default function LivroDados() {
  const controleEditora = new ControleEditora();

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [editora, setEditora] = useState("");

  const [autoresInput, setAutoresInput] = useState("");

  const [redirect, setRedirect] = useState(false);

  const editoras = controleEditora.getEditoras();
  const opcoes = editoras.map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
   
  
  const controle=new ControleLivros()

  const enviarDados = (ev: any) => {
    ev.preventDefault();

    // autores

    var autores: string[] = [];
    var valoresSeparados = autoresInput.split("\n");
    var autoresArray = valoresSeparados.map((autor) => autor.trim());
    autoresArray.map((autor) => {
      autores.push(autor);
    });

    //Editora

    const editoraSelecionada = opcoes.filter((opcao) => opcao.text === editora);

    let livro = new Livro(
      '0',
      editoraSelecionada[0].value,
      titulo,
      resumo,
      autores
    );

    controle.incluir(livro)



    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      router.push("/");
    }
  }, [redirect]);

  return (
    <div>
      <Menu name="novo" />
      <div className="container">
        <h1 className={style.cssh1}>Dados do Livro</h1>
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              placeholder="Digite o titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resumo">Resumo</label>
            <textarea
              className="form-control"
              id="resumo"
              placeholder="Digite o resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editora">Editora</label>
            <select
              className="form-control"
              id="editora"
              value={editora}
              placeholder="seleciona a editora"
              onChange={(e) => setEditora(e.target.value)}
            >
              <option key={0}></option>
              {opcoes.map((editora, index) => (
                <option key={editora.value}>{editora.text}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="autores">Autores</label>
            <textarea
              className="form-control"
              id="autores"
              placeholder="Digite o(s) autor(es)"
              value={autoresInput}
              onChange={(e) => setAutoresInput(e.target.value)}
            />
          </div>
        </form>

        <div className={style.cssbutton}>
          <button id="button" onClick={enviarDados} className="btn btn-primary">
            Salvar dados
          </button>
        </div>
      </div>
    </div>
  );
}
