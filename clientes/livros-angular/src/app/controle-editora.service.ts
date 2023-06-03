import { Injectable } from '@angular/core';
import { Editora } from './editora';
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras:Editora[]=[
    {
      codEditora:1,
      nome: "Alta Books"
     },
    {
      codEditora:2,
      nome: "Free Books"
    },
    {

      codEditora:3,
      nome: "Novatec Editora"

    },
  ];

  getEditoras():Editora[]{
    return this.editoras
  }


  getNomeEditora(codEditora:number):string{
    const editora= this.editoras.filter((editora)=>editora.codEditora===codEditora);
    if (editora.length > 0) {
      return editora[0].nome;
    } else {
      return '';
    }
  }



}
