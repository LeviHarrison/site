import styles from "../styles/Thumbnail.module.css";
import Link from "next/link";

const Thumbnail = ({ title, preview, image, tag, slug }) => {
  return (
    <Link href={`/post/${slug}`}>
      <a>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <p className={styles.preview}>{preview}</p>
          {image ? <img className={styles.image} src={image} /> : null}
          <br />
          <li
            className={styles.tag}
            style={{ background: tag.color, color: "white" }}
          >
            {tag.name}
          </li>
        </div>
      </a>
    </Link>
  );
};

export default Thumbnail;
