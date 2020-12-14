import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Avocado!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the demo!!!" />
        <p className="description">
          Get started by clicking our contact page :
          <Link href="/contact">
            <p className="pointer">Click here!!!!</p>
          </Link>
        </p>
      </main>

      <Footer />

      <style jsx>
        {`
          .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            algin-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .pointer {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
