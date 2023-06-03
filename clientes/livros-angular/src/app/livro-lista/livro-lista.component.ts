
import { ControleLivrosService } from './../controle-livros.service';
import { ControleEditoraService } from './../controle-editora.service';
import { Component,OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  editoras:Editora[]=[];
  livros:Livro[]=[]


  private servEditora_ :ControleEditoraService
  private servLivros_:ControleLivrosService

  constructor(
    servEditora:ControleEditoraService,
    servLivros:ControleLivrosService)
    {
      this.servEditora_=servEditora
      this.servLivros_=servLivros

    }

  cargaDados(){
    this.editoras=this.servEditora_.getEditoras()
    this.servLivros_.obterLivros().then((dados)=>{
       this.livros = dados.map((dado:any) => {
        return {
          codigo: dado._id,
          titulo: dado.titulo,
          resumo:dado.resumo,
          codEditora:dado.codEditora,
          autores:dado.autores
        };
      });
    })
  }

  ngOnInit(): void {
    this.cargaDados()
  }



  excluir  = (codigo:string)=>{
    console.log('click excluir livro')
    this.servLivros_.excluir(codigo)
    this.cargaDados()
  }

   obterNome=(codEditora:number):any =>{
   return this.servEditora_.getNomeEditora(codEditora)
  }


}
