 
import  ControleEditora  from "../controle/ControleEditora";

import "../styles/LinhaLivro.css";
import { Livro } from "../modelo/Livro";
 

interface LinhaLivroProps{
  livro:Livro,
  excluir:(ind:string)=>void
}

function LinhaLivro(props:LinhaLivroProps) {

  const controleEditora= new ControleEditora()

  const livro = props.livro
  
  let nomeEditora=controleEditora.getNomeEditora(livro.codEditora)
   
  let contLivro=0
  
  function bE_par(valor:number):boolean{
     const ePar = (valor/2 ===0)
     return ePar
  }

  function renderAutores(autores:string[]){
    return(
      autores.map((autor,index)=><li key={index}>{autor}</li>)
    )
  }

 
  const LinhasTb =<tr >
  <td key={contLivro}>
    <div className="tbtitle">
      <span>{livro.titulo}</span>
      <button className="hdtitle" onClick={() => props.excluir(livro.codigo)}>Excluir</button>
    </div>
  </td>
  <td>{livro.resumo}</td>
  <td>{nomeEditora}</td>
  <td>
    <ul>{renderAutores(livro.autores)}</ul>
  </td>
</tr>


return (
  <>
   
  {LinhasTb}
  
  </>
);

}
export default LinhaLivro;
