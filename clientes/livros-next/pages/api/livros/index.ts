import { NextApiRequest, NextApiResponse } from 'next'
import ControleLivros from '@/classes/controle/ControleLivros';  

const controladorDeLivro = new ControleLivros()


export default function controleLivro(req:NextApiRequest,res:NextApiResponse){
   
  
    if (req.method !== 'GET' && req.method !== 'POST') {
        res.status(405).send('Método não permitido');
        return;
    }

    if (req.method === 'POST') {
        const novoLivro = req.body;
        controladorDeLivro.incluir(novoLivro);
        res.status(200).json({ mensagem: 'Livro adicionado com sucesso!' });
        return;
    } 

 


    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const livros = controladorDeLivro.obterLivros();
        res.status(200).json(livros);
      } catch (e) {
        res.status(500).send('Erro interno do servidor');
      }
} 