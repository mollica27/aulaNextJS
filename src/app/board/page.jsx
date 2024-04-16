import styles from "./page.module.css";
import Tabuleiro from "./tabuleiro";

export default function Board() {
  return (
    <main className={styles.main}>
      <Tabuleiro />
    </main>
  );
}
