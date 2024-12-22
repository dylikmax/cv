import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";

function ProjectList() {
  const projects = [
    {
      title: "API&SPA",
      pictureLink: "img/api-spa.png",
      stack: ["TailwindCSS", "React", "React-Router", "Express"],
      description:
        "Website with own backend that repeat JSONPlaceholder for watching user`s photos.",
      link: "https://github.com/dylikmax/api-spa",
    },
    {
      title: "Website shop",
      pictureLink: "img/lamoda.png",
      stack: ["React", "NodeJS", "Express", "ExpressValidator"],
      description:
        "Сlothing store website with own backend that has filters & multiselects for searching.",
      link: "https://github.com/dylikmax/lamoda-server",
    },
    {
      title: "DOSAAF Landing",
      pictureLink: "img/landing.png",
      stack: ["CSS", "JavaScript", "Figma"],
      description:
        "Landing page of DOSAAF company with full adaptive to PC, desktop and mobile.",
      link: "https://dylikmax.github.io/",
    },
    {
      title: "Notion",
      pictureLink: "img/notion.png",
      stack: ["TailwindCSS", "React", "React-Router", "Redux"],
      description: "Website for managing notes independently for each user.",
      link: "https://github.com/dylikmax/notion-redux",
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
