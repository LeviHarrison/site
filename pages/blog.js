import Thumbnail from "../components/thumbnail";
import Header from "../components/header";
import styles from "../styles/Blog.module.css";

const posts = [
  {
    title: "Fios Exporter",
    preview:
      "A program that measures the performance of your home internet router",
    image: "/fios-exporter-grafana.png",
    tag: {
      name: "project",
      color: "teal",
    },
    slug: "fios-exporter",
  },
  {
    title: "Grüvee",
    preview:
      "I wrote a logging library (which records errors to the cloud) for an Open Source music app",
    image: "/gruvee-repo.png",
    tag: {
      name: "project",
      color: "teal",
    },
    slug: "gruvee",
  },
  {
    title: "Social Sentiment",
    preview:
      "A program that measures the public sentiment about companies based natural language processing of Reddit.",
    image: "/socialsentiment-graph.png",
    tag: {
      name: "project",
      color: "teal",
    },
    slug: "socialsentiment",
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
