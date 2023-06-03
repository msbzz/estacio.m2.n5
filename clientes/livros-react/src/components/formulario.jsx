import { useState } from "react";
 
export default function Formulario(props) {
 
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");

  const [autoresInput, setAutoresInput] = useState("");
  const [autores, setAutores] = useState([]);
  
  const [editora, setEditora] = useState("");

  const [teste, setTeste] = useState("A");
 
  // var autoresArray = [];
  
  function adicionarAutores() {
    var valores = autoresInput; // vindo do setAutores()
    console.log('adicionarAutores valores ==>',valores)
     try {
        var valoresSeparados = valores.split("\n");
       
       var autoresArray = valoresSeparados.map((autor) => autor.trim())
      
       console.log('adicionarAutores autoresArray ==>',autoresArray) 
       setAutores(autoresArray)
       setTeste('B')
       console.log('adicionarAutores autores ==>',teste) 
       
     }catch(e){


     }

  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    adicionarAutores()
    
    console.log('formulario ==>',{ titulo, resumo, editora, autores });
    
    props.onClick(titulo, resumo,autores, editora)
     
  };


  return (
    <>
       <div className="container">
        <h1>{props.tituloForm}</h1>
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
              rows="3"
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
              value={props.editora}
              onChange={(e) => setEditora(e.target.value)}
            >
              {props.editoras.map((editora, index) => (
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
          <button id="button" onClick={handleSubmit} className="btn btn-primary">
            Salvar dados
          </button>
        </form>
      </div>
    </>
  );
}
