
import { NextApiRequest, NextApiResponse } from 'next'
import ControleEditora from '@/classes/controle/ControleEditora'

const controladorDeEditora = new ControleEditora()

export default function controleEditora(req:NextApiRequest,res:NextApiResponse){
    
  if (req.method !== 'GET') {
    res.status(405).send('Método não permitido');
    return;
  }

  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const editoras = controladorDeEditora.getEditoras();
    res.status(200).json(editoras);
  } catch (e) {
    res.status(500).send('Erro interno do servidor');
  }
     
} 