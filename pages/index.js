
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
      <>
      <Head>
          <title>
              Ninja List | Home
          </title>
          <meta name={'keywords'} content={'Ninjas'}/>
      </Head>
      <div>
          <h2 className={styles.title}>Homepage</h2>
          <p className={styles.text}>Lorem ipsum dolor</p>
          <p className={styles.text}>Lorem ipsum dolor</p>
          <Link className={styles.btn} href={'/ninjas'}>
              See ninja listing
          </Link>
      </div>
          </>
  );
}
