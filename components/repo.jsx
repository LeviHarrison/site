import styles from '../styles/Repo.module.css'

const Repo = ({ data }) => {
	return (
				<a href={`https://github.com/${data.owner.login}/${data.name}`} target="_blank">
        	<div className={styles.repo}>
						<h1>{data.name}</h1>
            <h2>{data.owner.login}</h2>
            <p>{data.description}</p>
            <ul className={styles.languages}>
                {data.languages.nodes.map((node, i) => <li className={styles.language} style={{background: node.color}} key={i}>
                    {node.name}
                </li> )}
            </ul>
					</div>
				</a>
    )
}

export default Repo
