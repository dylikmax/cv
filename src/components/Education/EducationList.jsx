import EducationItem from "./EducationItem";
import styles from "./EducationList.module.css";

function EducationList() {
  const educations = [
    {
      place: "BSU",
      time: "2023 - 2027",
      speciality: "Mathematician-programmer",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Education</h2>
      <div className={styles.list}>
        {educations.map((edu, i) => (
          <EducationItem key={i} edu={edu} />
        ))}
      </div>
    </div>
  );
}

export default EducationList;
