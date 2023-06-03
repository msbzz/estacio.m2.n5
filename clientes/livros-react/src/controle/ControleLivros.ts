import { Livro } from "../modelo/Livro";

import {URL} from '../environments/environments'
 
 
var URL_PROJ =URL

//var URL =URL_externa

 

interface propsLivro{
   codigo : string; 
   codEditora :number;
   título : string;
   resumo : string;
  autores :string[]
}

export default class ControleLivros {
   
  Livros: Livro[] = []; // inicializa como uma array vazia
   
   
  constructor(livros:any[]){
     this.Livros=livros; 

  }
   
     
  public async obterLivros()    {
      const response = await fetch(URL_PROJ);
      const data = await response.json()
 
     return  data
     
  }
   
  public incluir(livro:Livro):void {
     
    const livroFicticio = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores:livro.autores
    };


    fetch(URL_PROJ, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
       
      body: JSON.stringify(livroFicticio)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
 

  public async excluir(cod: string) {
   fetch(URL_PROJ+'/'+cod,{method:'DELETE'}).then(()=>console.log('Documento ' +cod+ ' excluido')).catch(error => {
    console.error(error);
  });  
     return
  }
}
 