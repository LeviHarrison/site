import { GraphQLClient, gql } from "graphql-request";
import TagLine from "../components/tagline";
import styles from "../styles/Home.module.css";
import Repo from "../components/repo";
import Thumbnail from "../components/thumbnail";

const projects = [
  {
    title: "Fios Exporter",
    preview:
      "A program that measures the performance of your home internet router",
    image: "/fios-exporter-grafana.png",
    slug: "fios-exporter",
  },
  {
    title: "Grüvee",
    preview:
      "Contributing a logging library (which records errors to the cloud) for an Open Source music app",
    image: "/gruvee-repo.png",
    slug: "gruvee",
  },
  {
    title: "Social Sentiment",
    preview:
      "A program that measures the public sentiment about companies based natural language processing of Reddit.",
    image: "/socialsentiment-graph.png",
    slug: "socialsentiment",
  },
];

export default function Home({ pinned }) {
  return (
    <>
      <div className={styles.main}>
        <h1>Levi Harrison</h1>
        <TagLine />
      </div>
      <div className={styles.features}>
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
        {/*<div className={styles.project}>
		      <h1 className={styles.subheader}>Open Source Work</h1>
          <div className={styles.repos}>
            {pinned.nodes.map((node, i) => (
              <Repo data={node} key={i} />
            ))}
          </div>
        </div>
				*/}
      </div>
    </>
  );
}

const query = gql`
  {
    user(login: "leviharrison") {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            url
            owner {
              login
            }
            languages(first: 4) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

const client = new GraphQLClient("https://api.github.com/graphql");

const headers = {
  authorization: "bearer " + process.env.GITHUB_ACCESS,
};

export async function getStaticProps() {
  const response = await client.request(query, {}, headers);

  return {
    props: {
      pinned: response.user.pinnedItems,
    },

    revalidate: 1800,
  };
}
