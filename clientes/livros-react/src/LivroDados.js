import {  useState } from "react";
import { Navigate } from "react-router-dom";
 
import ControleLivros from "./controle/ControleLivros"; 
import ControleEditora from "./controle/ControleEditora";
 
import { Livro } from "./modelo/Livro";
 
import './styles/LivroDados.css'


export default function LivroDados() {
  const controleEditora = new ControleEditora();
   
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [editora,setEditora]= useState("")
  
  const [autoresInput, setAutoresInput] = useState("");

  const [redirect, setRedirect] = useState(false);
   
  const editoras = controleEditora.getEditoras();
  const opcoes = editoras.map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
 
  const enviarDados=(ev)=>{
   
    ev.preventDefault()  
    
    // autores
    
    var autores=[]
    var valoresSeparados = autoresInput.split("\n")
    var autoresArray = valoresSeparados.map((autor) => autor.trim())
    autoresArray.map((autor)=>{autores.push(autor)})
    ;
    
    //Editora

    const editoraSelecionada=opcoes.filter(opcao=>opcao.text===editora)  
 
    let livro= new Livro(0,editoraSelecionada[0].value ,titulo,resumo,autores)
    
    const ctrLivros = new ControleLivros()
    console.log('dentro de livro dados livro.titulo : ',livro.titulo)
    ctrLivros.incluir(livro)
 
    setRedirect(true) 
 
  }
  

  return (
    <div>
        {redirect && <Navigate to="/" />}
          
        <div className="container">
        <h1>Dados do Livro</h1>
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
           <button id="button" onClick={enviarDados} className="btn btn-primary">
            Salvar dados
          </button>
 
         
      </div>
       
    </div>
  );
}
