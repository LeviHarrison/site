import { GraphQLClient, gql } from "graphql-request";
import Header from "../../components/header.jsx";
import Repo from "../../components/repo.jsx";

export default function Post({ repo }) {
  return (
    <>
      <Header />
      <h1>Fios Exporter</h1>
      <p>I was interested in</p>
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
