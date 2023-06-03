import ControleEditora from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";
import styles from '../styles/LinhaLivro.module.css'

interface LinhaLivroProps {
  livro: Livro;
  excluir: (newValue: string) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();

  const livro = props.livro;

  let nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  let contLivro = 0;

  
  function renderAutores(autores: string[]) {
    return autores.map((autor, index) => <li key={index}>{autor}</li>);
  }
  
  const LinhasTb =<tr key={livro.codigo}>
  <td>
    <div className={styles.tbtitle}>
      <span>{livro.titulo}</span>
      <button className={styles.hdtitle} onClick={() => props.excluir(livro.codigo)}>Excluir</button>
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
};
