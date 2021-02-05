import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import TagLine from "../components/tagline";
import styles from "../styles/Home.module.css";
import Repos from "../components/repos";
import Projects from "../components/projects";

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
      "A program that uses natural language processing to measure the sentiment of Reddit users towards major companies",
    image: "/socialsentiment-graph.png",
    slug: "socialsentiment",
  },
];

export default function Home({ pinned }) {
  return (
    <>
      <Head>
        <title>Levi Harrison</title>
      </Head>
      <div className={styles.main}>
        <h1>Levi Harrison</h1>
        <TagLine />
        <a href="https://github.com/LeviHarrison" target="_blank">
          <div className={styles.github}>
            <img src="/github.png" />
            <span>/LeviHarrison</span>
          </div>
        </a>
      </div>
      <div className={styles.tech}>
        <p>
          I "concentrate" on Backend development, but realistically my projects
          are all over. I’ve done my fair share of API building for SaaS
          projects, and also worked on (too) many websites, infrastructure,
          hardware, desktop, and artificial intelligence.
        </p>
        <p>
          I work mostly with <span style={{ color: "#00add8" }}>Golang</span>,
          and <span style={{ color: "#f7df1e" }}>Javascript</span>/
          <span style={{ color: "#61dafb" }}>React</span>/
          <span style={{ color: "#563d7c" }}>CSS</span> for websites. Less
          frequently, I use <span style={{ color: "#4584b6" }}>Python</span>,
          <span style={{ color: "#555555" }}>C</span>,
          <span style={{ color: "#3178c6" }}>Typescript</span>,
          <span style={{ color: "#dea584" }}>Rust</span>, and{" "}
          <span style={{ color: "#f34b7d" }}>C++</span>.
        </p>
        <p>
          I use <span style={{ color: "#0db7ed" }}>Docker</span> for basically
          every application I make and spin in
          <span style={{ color: "#254c5b" }}>GRPC</span> for microservices. I’ve
          spent way too long configuring
          <span style={{ color: "#316ce4" }}>Kubernetes</span>, and currently
          have a cluster running on a server in my basement.
        </p>
      </div>
      <div className={styles.features}>
        <Projects projects={projects} />
        <Repos pinned={pinned} />
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
