import styles from "./StackList.module.css";

function StackItem({ item }) {
  return <div className={styles.item}>
    {item}
  </div>
}

export default StackItem