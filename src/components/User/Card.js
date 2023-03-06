import React from "react";
import { useUserData } from "../../context/UserData";
import Link from "next/link";
import styles from "./style.module.css";
import Head from "next/head";
import { useAmp } from "next/amp";
import Image from "next/image";

function Card({ entry }) {
  const { scoreUpdate } = useUserData();

  const isAmp = useAmp();

  return (
    <>
      <Head>
        <title>{entry.name}</title>
        {isAmp && (
          <>
            <meta
              name="viewport"
              content="width=device-width,minimum-scale=1,initial-scale=1"
              key={31242}
            />
            <meta charSet="utf-8" />
            <link
              rel="canonical"
              href="https://www.example.com/example-page.html"
              key={3123}
            />
            <script
              async
              src="https://cdn.ampproject.org/v0.js"
              key="amp-runtime"
            />
          </>
        )}
      </Head>

      {isAmp ? (
        <amp-list
          layout="fixed-height"
          height="60"
          className={styles.card}
          item-component="amp-list-item"
        >
          <template type="amp-mustache">
            <Link
              href={`detail/${entry.id}`}
              style={{ textDecoration: "none" }}
            >
              <Image
                src={entry.image}
                className={styles.image}
                alt={entry.name}
                height="60"
                width="60"
              ></Image>
            </Link>
            <Link
              href={`detail/${entry.id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className={styles.title}>{entry.name}</h2>
              <p className={styles.description}>{entry.title}</p>
            </Link>
            <div className={styles.score}>
              <div
                className={styles.plus}
                role="button"
                tabIndex="0"
                on="tap:AMP.setState({score: score + 1})"
              >
                +
              </div>
              <div className={styles.result}>{entry.score}</div>
              <div
                className={styles.minus}
                role="button"
                tabIndex="0"
                on="tap:AMP.setState({score: score - 1})"
              >
                -
              </div>
            </div>
          </template>
        </amp-list>
      ) : (
        // Normal HTML
        <div className={styles.card}>
          <div className={styles.body}>
            <Link
              href={`detail/${entry.id}`}
              style={{ textDecoration: "none" }}
            >
              <Image
                src={entry.image}
                className={styles.image}
                alt={entry.name}
                height="60"
                width="60"
              ></Image>
            </Link>
          </div>
          <div className={styles.head}>
            <Link
              href={`detail/${entry.id}`}
              style={{ textDecoration: "none" }}
            >
              <h2 className={styles.title}>{entry.name}</h2>
              <p className={styles.description}>{entry.title}</p>
            </Link>
          </div>
          <div className={styles.score}>
            <div
              className={styles.plus}
              onClick={() => scoreUpdate(entry.id, "plus")}
            >
              +
            </div>
            <div className={styles.result}>{entry.score}</div>
            <div
              className={styles.minus}
              onClick={() => scoreUpdate(entry.id, "minus")}
            >
              -
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
