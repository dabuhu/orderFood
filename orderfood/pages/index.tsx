import { Divider } from "@mui/material";
import React, { ReactElement } from "react";
import Banner from "../components/banner/Banner";
import CardProduct from "../components/card/CardProduct";
import HighlightCard from "../components/card/HighlightCard";
import Layout from "../components/Layout";
import { highlight, productTrending } from "../entity/Highlight";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="highlight mt-5">
          <h4 className="ms-3">Highlights</h4>
          <div className="d-flex mt-3">
            {highlight.map((item, index) => (
              <div key={index} className="ms-2">
                <HighlightCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="highlight mt-5">
          <div className="d-flex justify-content-between">
            <h4 className="ms-3">Trending on our restaurant</h4>
            <Link href="#">
              <a>See more</a>
            </Link>
          </div>
          <div className="d-flex mt-3">
            {productTrending.map((item, index) => (
              <div key={index} className="ms-2">
                <CardProduct item={item} />
              </div>
            ))}
          </div>
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learnn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <main>{page}</main>;
};
// const Home: NextPage = () => {
//   return (

//   )
// }

// export default Home
