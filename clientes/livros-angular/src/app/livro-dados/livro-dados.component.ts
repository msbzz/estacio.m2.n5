import { Livro } from '../livro';
import { Editora } from '../editora';

import { Component, OnInit } from '@angular/core';

import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],

})
export class LivroDadosComponent implements OnInit{

  private router:Router;
  private servEditora:ControleEditoraService;
  private servLivros:ControleLivrosService;

  autoresForm:string='';
  editoras :Editora[]=[];

  livro:any = { titulo:'',resumo: '',editoraNome:'',autores:[] };

  constructor(
    servEditora:ControleEditoraService,
    servLivros:ControleLivrosService,
    router:Router)
    {
    this.router=router;
    this.servEditora=servEditora;
    this.servLivros=servLivros;
    }

        ngOnInit(): void {
        this.editoras=this.servEditora.getEditoras()
        //console.log('this.editoras',this.editoras)
    }


    incluir=()=>{
      //editora
      const editoraSelecionada=this.editoras.filter(editora=>editora.nome===this.livro.editoraNome)
      //

      // autores
      var autores:string[]=[]
      var valoresSeparados = this.livro.autores.split("\n")
      var autoresArray = valoresSeparados.map((autor:any) => autor.trim())
      autoresArray.map((autor:any)=>{autores.push(autor)})

      console.log('autores',autores)
      var livro= new Livro(
                 '0',
                 editoraSelecionada[0].codEditora,
                 this.livro.titulo,
                 this.livro.resumo,
                 autores )

       this.servLivros.incluir(livro)
       this.router.navigateByUrl('/')
    }

 }
