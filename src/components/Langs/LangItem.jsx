import styles from "./LangList.module.css";

function LangItem({ lang }) {
  const { name, iconUrl, level } = lang;

  return (
    <div className={styles.item}>
      <img src={iconUrl} className={styles.img}/>
      <div className={styles.topInfo}>
        <h3>{name}</h3>
        <p className={styles.text}>{level}</p>
      </div>
    </div>
  );
}

export default LangItem;
