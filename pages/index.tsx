import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "components/Header/Header";
import LandingModal from "components/LandingModal/LandingModal";
import MainBox from "components/MainBox/MainBox";
import "lib/socketio";
import ConnectionErrorToast from "components/ConnectionErrorToast/ConnectionErrorToast";

const DynamicInputBox = dynamic(() => import("components/InputBox/InputBox"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zapochat</title>
        <meta
          property="description"
          content="Zapochat, an online chat application."
        />
        <meta property="og:title" content="Zapochat" key="title" />
        <meta
          property="og:description"
          content="Zapochat, an online chat application."
        />
      </Head>
      <LandingModal />
      <Box>
        <Header />
        <MainBox />
        <DynamicInputBox />
      </Box>
      <ConnectionErrorToast />
    </div>
  );
};

export default Home;
