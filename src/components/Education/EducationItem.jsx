import styles from "./EducationList.module.css"

function EducationItem({ edu }) {
  const { place, time, speciality } = edu;

  return <div className={styles.item}>
    <div className={styles.topInfo}>
      <h3>{place}</h3>
      <span className={styles.text}>{time}</span>
    </div>
    <p className={styles.text}>{speciality}</p>
  </div>;
}

export default EducationItem;
