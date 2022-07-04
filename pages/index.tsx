import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Header from "components/Header/Header";
import InputBox from "components/InputBox/InputBox";
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
