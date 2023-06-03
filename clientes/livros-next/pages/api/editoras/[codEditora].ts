import { NextApiRequest, NextApiResponse } from "next";
import controleEditora, { getNomeEditora } from ".";

export default function CodEditora(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).send("Método não permitido");
    return;
  }
  
  try {
    //res.setHeader('Access-Control-Allow-Origin', '*');

    const id = parseInt(req.query.codEditora as string, 10);
    const editora = getNomeEditora(id);
    res.status(200).json(editora);
  } catch (e) {
    res.status(500).send("Erro interno do servidor");
  }
}
