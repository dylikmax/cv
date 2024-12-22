import ExperienceItem from "./ExperienceItem";
import styles from "./WorkExperience.module.css";

function WorkExperience() {
  const workPlaces = [
    {
      title: "Education",
      place: "BSU",
      time: "09.23 - nowadays",
      description:
        "Studied basics of programming, JavaScript and its frameworks and libraries. Did projects with using all basic abilities of JavaScript.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Working experience</h2>
      <div className={styles.list}>
        {workPlaces.map((place, i) => (
          <ExperienceItem key={i} workPlace={place} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
