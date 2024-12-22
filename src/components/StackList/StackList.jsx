import StackItem from "./StackItem";
import styles from "./StackList.module.css";

function StackList() {
  const teches = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MySQL",
    "Git",
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Stack</h2>
      <div className={styles.list}>
        {teches.map((item, i) => (
          <StackItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default StackList;
