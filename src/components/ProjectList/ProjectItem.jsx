import styles from "./ProjectList.module.css";
import StackItem from "./StackItem";

function ProjectItem({ project }) {
  const { title, pictureLink, stack, description } = project;

  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <img src={pictureLink} className={styles.pic}/>
      <div className={styles.stack}>
        {stack.map((tech, i) => (
          <StackItem key={i} item={tech} />
        ))}
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  );
}

export default ProjectItem;
