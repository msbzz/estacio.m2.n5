
import { URL } from '../environments/environments';

import { Injectable } from '@angular/core';
import { Livro } from './livro';
@Injectable({
  providedIn: 'root',
})



export class ControleLivrosService {


  URL:string = URL


  constructor() {}



public async obterLivros() {
  const response = await fetch(this.URL);
  const data = await response.json();
 return data;
}

public incluir(livro: Livro): void {
  const livroFicticio = {
    codEditora: livro.codEditora,
    titulo: livro.titulo,
    resumo: livro.resumo,
    autores: livro.autores,
  };

  fetch(this.URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(livroFicticio),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

public async excluir(cod: string) {
  fetch(this.URL + "/" + cod, { method: "DELETE" })
    .then(() => console.log("Documento " + cod + " excluido"))
    .catch((error) => {
      console.error(error);
    });
  return;
}

}
