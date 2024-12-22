import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css"

function ProjectList() {
  const projects = [
    {
      title: "DOSAAF Landing",
      pictureLink: "img/landing.png",
      stack: ["CSS", "JavaScript", "Figma"],
      description:
        "Landing page of DOSAAF company with full adaptive to PC, desktop and mobile.",
    },
    {
      title: "Website shop",
      pictureLink: "img/landing.png",
      stack: ["React", "NodeJS", "Express", "ExpressValidator"],
      description:
        "Сlothing store website with own backend that has filters & multiselects for searching.",
    },
    {
      title: "API&SPA",
      pictureLink: "img/landing.png",
      stack: ["TailwindCSS", "React", "React-Router", "Express"],
      description:
        "Website with own backend that repeat JSONPlaceholder for watching user`s photos.",
    },
    {
      title: "Notion",
      pictureLink: "img/landing.png",
      stack: ["TailwindCSS", "React", "React-Router", "Redux"],
      description:
        "Website for managing notes independently for each user.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.list}>
        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
