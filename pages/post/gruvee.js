import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import Header from "../../components/header.jsx";
import Repo from "../../components/repo.jsx";
import styles from "../../styles/Post.module.css";

export default function Post({ repo }) {
  return (
    <>
      <Head>
        <title>Gruvee - Levi Harrison</title>
      </Head>
      <Header />
      <h1 className={styles.main}>Grüvee</h1>
      <img className={styles.image} src="/gruvee-repo.png" />
      <p className={styles.text}>
        During the summer of 2020, I picked up a new language: Golang. Although
        I’d worked in many languages before, PHP, Javascript, Python, C++, and
        so on, Go was the first I’ve felt really comfortable working with. It
        also came at a time where I had finally crossed over the early stages of
        learning how to code, and now could actually produce (somewhat) useful
        programs. Something I had wanted to do for a long time was contribute to
        an Open Source project, which is a piece of software publicly developed
        with help from anyone who wants to. Although most of the time I program
        solo, it’s fun and more motivating to work with others. It was just my
        luck when I happened to find a Software Engineer streaming himself
        working on an Open Source music app, and encouraged others to help out.
        What intrigued me most was the backend portion of the application, which
        was written in my preferred language, Go. The Engineer had left some
        feature requests open, and I decided to try my hand at implementing one
        which seemed pretty easy. It called for the addition of “Error Logging”,
        which is basically reporting any errors that happen in the program so
        that they can be accessed in a dashboard and be dealt with. Throughout
        the course of a month, he helped me develop the code, which ended up
        being spun off into a mini-library. In the end, I had an Open Source
        contribution to my name but had also gained valuable experience from
        somebody who really knew what they were doing. The source code for the
        project can be accessed by going to the Github Repository linked below.
      </p>
      <Repo data={repo} />
    </>
  );
}

const query = gql`
  {
    repository(owner: "PixelogicDev", name: "gruveebackend") {
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
