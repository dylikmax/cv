import LangItem from "./LangItem";
import styles from "./LangList.module.css";

function LangList() {
  const languages = [
    {
      name: "Russian",
      iconUrl: "icons/russian.png",
      level: "Native",
    },
    {
      name: "English",
      iconUrl: "icons/english.png",
      level: "B2",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Languages</h2>
      <div className={styles.list}>
        {languages.map((lang, i) => (
          <LangItem key={i} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default LangList;
