import styles from "./WorkExperience.module.css";

function ExperienceItem({ workPlace }) {
  const { title, place, time, description } = workPlace;
  return (
    <div className={styles.place}>
      <div className={styles.topInfo}>
        <h3>{title}</h3>
        <span className={styles.text}>
          {place}, {time}
        </span>
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  );
}

export default ExperienceItem;
