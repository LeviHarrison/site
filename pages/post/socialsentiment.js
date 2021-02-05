import Header from "../../components/header.jsx";
import styles from "../../styles/Post.module.css";

export default function Post() {
  return (
    <>
      <Head>
        <title>Social Sentiment - Levi Harrison</title>
      </Head>
      <Header />
      <h1 className={styles.main}>Grüvee</h1>
      <img className={styles.image} src="/socialsentiment-graph.png" />
      <p className={styles.text}>
        Over the summer, I wanted to try out AI, and with that came I cool
        project idea. I decided to create a program that would find stock
        tickers of different companies in Reddit posts, and then track the
        sentiment in that post using Natural Language Processing. Separately, it
        was also my first experience building microservices, which is an
        architecture where different components are split off into separate
        services. Pictured is the dashboard for Apple, which you can see was
        tracking up at that time.
      </p>
      <img className={styles.image} src="/socialsentiment-terminal.png" />
    </>
  );
}
