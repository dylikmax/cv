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
      title: "DOSAAF Landing",
      pictureLink: "img/landing.png",
      stack: ["CSS", "JavaScript", "Figma"],
      description:
        "Landing page of DOSAAF company with full adaptive to PC, desktop and mobile.",
    },
    {
      title: "DOSAAF Landing",
      pictureLink: "img/landing.png",
      stack: ["CSS", "JavaScript", "Figma"],
      description:
        "Landing page of DOSAAF company with full adaptive to PC, desktop and mobile.",
    },
    {
      title: "DOSAAF Landing",
      pictureLink: "img/landing.png",
      stack: ["CSS", "JavaScript", "Figma"],
      description:
        "Landing page of DOSAAF company with full adaptive to PC, desktop and mobile.",
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
