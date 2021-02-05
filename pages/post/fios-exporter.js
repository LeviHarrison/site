import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head"
import Header from "../../components/header.jsx";
import Repo from "../../components/repo.jsx";
import styles from "../../styles/Post.module.css";

export default function Post({ repo }) {
  return (
    <>
      <Head>
        <title>Fios Exporter - Levi Harrison</title>
      </Head>
      <Header />
      <h1 className={styles.main}>Fios Exporter</h1>
      <img className={styles.image} src="/fios-exporter-grafana.png" />
      <p className={styles.text}>
        During the time of Zoom, everyone's home internet has taken a hit. So,
        one day, out of interest, I decided to find out how much traffic my
        router was handling. Inside the admin panel, there's a dashboard
        containing metrics, but to my disappointment, it was hard to read and
        also didn't have the central control room feel, which is what I was
        going for. At the same time, I had been looking more into Cloud Native
        software, which is a newer category of programs designed to run in the
        cloud, and take advantage of its offerings. Particularly of interest was
        Prometheus, a metrics collection system. Prometheus works by scraping
        different programs that offer metrics and then cataloging and storing
        the data. Programs designed solely to provide Prometheus with metrics
        are called "Exporters", and I decided to build one for my router. The
        most challenging part was figuring out how to automate logging into the
        dashboard, but once I got that down, it was fairly simple to get the
        data I wanted. I then headed over to the data visualization tool Grafana
        and added some futuristic-looking graphs, as depicted above. The source
        code for the project can be accessed by going to the Github Repository
        linked below.
      </p>
      <Repo data={repo} />
    </>
  );
}

const query = gql`
  {
    repository(owner: "LeviHarrison", name: "fios-exporter") {
      name
      description
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
`;

const client = new GraphQLClient("https://api.github.com/graphql");

const headers = {
  authorization: "bearer " + process.env.GITHUB_ACCESS,
};

export async function getStaticProps() {
  const response = await client.request(query, {}, headers);

  return {
    props: {
      repo: response.repository,
    },

    revalidate: 1800,
  };
}
