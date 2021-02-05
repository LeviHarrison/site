import Thumbnail from "../components/thumbnail";
import styles from "../styles/Home.module.css";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.subheader}>Projects</h1>
      <div className={styles.thumbnails}>
        {projects.map((project, i) => (
          <Thumbnail
            title={project.title}
            preview={project.preview}
            image={project.image}
            tag={project.tag}
            slug={project.slug}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
