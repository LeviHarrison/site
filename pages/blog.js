import Thumbnail from "../components/thumbnail";
import Header from "../components/header";
import styles from "../styles/Blog.module.css";

const posts = [
  {
    title: "Fios Exporter",
    preview: "Collect internet metrics from the Fios Quantum Gateway Router",
    image: "/fios-exporter-grafana.png",
    tag: {
      name: "project",
      color: "teal",
    },
    slug: "fios-exporter",
  },
  {
    title: "Grüvee",
    preview: "Contributing to an Open Source music app",
    image: "/gruvee-repo.png",
    tag: {
      name: "project",
      color: "teal",
    },
    slug: "gruvee",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <h1 className={styles.main}>Posts</h1>
      <div>
        {posts.map((post, i) => (
          <Thumbnail
            title={post.title}
            preview={post.preview}
            image={post.image}
            tag={post.tag}
            slug={post.slug}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
