import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RandomFox />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;