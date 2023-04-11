import type { NextPage } from "next";
import Head from "next/head";
import { Keyboard } from "../components/elements/Keyboard/Keyboard";
import { Blocks } from "../components/elements/Game/Blocks";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Christian Wordle</title>
        <meta name="description" content="My BIGBrave Project" />
        <link rel="icon" href="/favicon/icon-48x48.png" />
      </Head>
      <div className="flex justify-center items-center">
        <Blocks />
      </div>
      <div className="absolute m-auto left-0 right-0 bottom-2">
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
