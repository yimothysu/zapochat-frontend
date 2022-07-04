import { Box, HStack } from "@chakra-ui/react";
import ChannelsBox from "components/ChannelsBox/ChannelsBox";
import ClientsBox from "../ClientsBox/ClientsBox";
import MessagesBox from "../MessagesBox/MessagesBox";

function MainBox() {
  return (
    <HStack align="top" spacing="0">
      <ChannelsBox />
      <Box w="100vw" p="1">
        <ClientsBox float="right" />
        <MessagesBox maxWidth="100%" />
      </Box>
    </HStack>
  );
}

export default MainBox;
