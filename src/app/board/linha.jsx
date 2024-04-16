import BoardComponent from "./boardComponent";
import styles from "./linha.module.css";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <BoardComponent preta={props.preta} />
      <BoardComponent preta={!props.preta} />
      <BoardComponent preta={props.preta} />
      <BoardComponent preta={!props.preta} />
      <BoardComponent preta={props.preta} />
      <BoardComponent preta={!props.preta} />
      <BoardComponent preta={props.preta} />
      <BoardComponent preta={!props.preta} />
    </div>
  );
}
