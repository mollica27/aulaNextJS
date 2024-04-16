import styles from "./page.module.css";

export default function Slot(props) {
  return (
    <div
      style={{
        backgroundColor: props.preta ? "#000" : "#fff",
      }}
      className={styles.slot}
    ></div>
  );
}
