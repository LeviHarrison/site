import styles from "../styles/Home.module.css"
import Repo from "./repo"

const Repos = ({ pinned }) => {
    return (
        <div className={styles.project}>
		    <h1 className={styles.subheader}>Open Source Work</h1>
            <div className={styles.repos}>
                {pinned.nodes.map((node, i) => (
                    <Repo data={node} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Repos