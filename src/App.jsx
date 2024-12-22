import styles from "./App.module.css";
import EducationList from "./components/Education/EducationList";
import Header from "./components/Header/Header";
import LangList from "./components/Langs/LangList";
import ProjectList from "./components/ProjectList/ProjectList";
import StackList from "./components/StackList/StackList";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import "./variables.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.leftPart}>
            <WorkExperience/>
            <ProjectList/>
          </div>
          <div className={styles.line}/>
          <div className={styles.rightPart}>
            <StackList />
            <EducationList/>
            <LangList/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
