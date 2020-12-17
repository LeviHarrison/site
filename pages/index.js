import { GraphQLClient, gql } from 'graphql-request'
import TagLine from '../components/tagline'
import styles from '../styles/Home.module.css'
import Repo from '../components/repo'

export default function Home({ pinned }) {
  return (
    <>
      <div className={styles.main}>
        <h1>Levi Harrison</h1>
        <TagLine />
      </div>
      <div className={styles.repos}>
        <div>{pinned.nodes.map((node, i) => <Repo data={node} item={i} /> )}</div>
      </div>
    </>
  )
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
`

const client = new GraphQLClient("https://api.github.com/graphql")

const headers = {
  authorization: "bearer " + process.env.GITHUB_ACCESS
}

export async function getStaticProps() {
    const response = await client.request(query, {}, headers)

    return {
      props: {
        pinned: response.user.pinnedItems
      },

      revalidate: 1800
    }
}