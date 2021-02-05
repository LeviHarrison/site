import * as Panelbear from "@panelbear/panelbear-js"
import styles from "../styles/Home.module.css"
import Repo from "./repo"

const click = async (name) => {
    Panelbear.load(process.env.NEXT_PUBLIC_ANALYTICS_ID, {})

    Panelbear.track("repo", name)
}

const Repos = ({ pinned }) => {
    return (
        <div className={styles.project}>
		    <h1 className={styles.subheader}>Open Source Work</h1>
            <div className={styles.repos}>
                {pinned.nodes.map((node, i) => (
                    <Repo click={click} data={node} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Repos