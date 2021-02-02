import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <Link href="/">
      <a>
        <h1 className={styles.home}>Levi Harrison</h1>
      </a>
    </Link>
  );
}
