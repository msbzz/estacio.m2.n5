import type { NextPage } from "next";

import React, { useEffect, useState } from "react";
 

import { LinhaLivro } from "@/componentes/LinhaLivro";
import ControleLivros from '../classes/controle/ControleLivros'
 
import { LivroDb } from "../classes/modelo/LivroDb";


export const LivroLista: NextPage = () => {
   
  const [livrosTemp, setLivrosTemp] = useState<LivroDb[]>([]);
  const [carregado, setCarregado] = useState(false);
 
  const controleLivros:ControleLivros=new ControleLivros()
 
  const carregarLivros = async () => {
    const livros = await controleLivros.obterLivros();
    setLivrosTemp(livros);
  };
 

  useEffect(() => {
    carregarLivros().then(() => setCarregado(true));
  }, [carregado]);
  
//adaptação ao campo codigo usado no exemplo anterior que não existe na tabela.....

const livros = livrosTemp.map((livro) => {
  return { 
    codigo: livro._id, 
    titulo: livro.titulo,
    resumo:livro.resumo,
    codEditora:livro.codEditora,
    autores:livro.autores
  };
});

  console.log('livros next',livros,livrosTemp)
  
  const excluirLivro = (id: string) => {
    console.log("excluirLivro", id);
    controleLivros.excluir(id);
    setCarregado(false)
     
  };
 
 
  const cargaLivros = () => {
    return livros.map((livro, ind) => {
        
      return (
        <>
          <LinhaLivro livro={livro} excluir={excluirLivro} />
        </>
      );
    }); 
  };
  

  return (
    //
    <div className="container">
      <main>
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped">
          <thead className="bg-dark text-white">
            <tr>
              <th>Titulo</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>{cargaLivros()}</tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
