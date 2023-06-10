import { NextApiRequest, NextApiResponse } from "next";
import ControleLivros from "@/classes/controle/ControleLivros";

const controleLivro = new ControleLivros();
//import controleLivro from '.'

export default function Codigo(req: NextApiRequest, res: NextApiResponse) {
   

  if (req.method !== "DELETE") {
    res.status(405).send("Método não permitido");
    return;
  }

  //const id = parseInt(req.query.codigo as string, 10);
  const id =  req.query.codigo ;
  

  try {
    controleLivro.excluir(id);
    res.status(200).send("exclusão realizada com sucesso " +req.method);
  } catch (e) {
    res.status(500).send("Erro interno do servidor");
  }
  return;
}
