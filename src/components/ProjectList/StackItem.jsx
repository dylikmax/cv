import styles from "./ProjectList.module.css";

function StackItem({ item }) {
  return <div className={styles.item}>
    {item}
  </div>
}

export default StackItem