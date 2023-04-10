import { faBeer, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { Keyboard } from "../components/elements/Keyboard/Keyboard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>BIGBrave Next</title>
        <meta name="description" content="My BIGBrave Project" />
        <link rel="icon" href="/favicon/icon-48x48.png" />
      </Head>
      <Keyboard />
    </div>
  );
};

export default Home;
