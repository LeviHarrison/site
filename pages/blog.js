import Link from "next/link";
import Thumbnail from "../components/thumbnail";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className={styles.home}>Levi Harrison</h1>
        </a>
      </Link>
      <h1 className={styles.main}>Posts</h1>
    </>
  );
}
