import React, { useState, useEffect } from "react";
 
import LinhaLivro from "./components/LinhaLivro";
 
import ControleLivros from "./controle/ControleLivros";

export default function LivroLista() {
   
 
  const [livrosTemp, setLivrosTemp] = useState([]);
  const [loading, setLoading] = useState(false);  
 
  const controleLivros = new ControleLivros();
  
  useEffect(() => {
       setLoading(true)  
       const delay = setTimeout(() => {
        controleLivros.obterLivros().then((livros) => {
                setLivrosTemp(livros);
                setLoading(false)
                console.log('realizou set livros')
            });
          }, 5000); // aumenta o tempo limite de resposta para 5 segundos
        
          return () => clearTimeout(delay);
}, []);
  
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

  const excluir = (codigo) => {
    controleLivros.excluir(codigo)
    .then(setLivrosTemp(livrosTemp.filter(livro => livro._id !== codigo))) 
     setLoading(false)
  };
 
  
  function cargaLivros() {
    return livros.map((livro, ind) => {
      return <LinhaLivro key={ind} livro={livro} excluir={excluir} />;
    });
  }
  
 

  return (
    <div className="container">
       
      <main>
      {loading ? ( // renderiza um componente de indicador de carregamento quando loading for verdadeiro
          <div>Carregando...</div>
        ) : (
          <div>
          <h1>Catalogo de Livros</h1>  
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
          </div>
        )}

      </main>
    </div>
  );
}
