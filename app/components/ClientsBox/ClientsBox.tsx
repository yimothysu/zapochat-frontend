import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

type ClientListingProps = {
  clientName: string;
};

function ClientListing({ clientName }: ClientListingProps) {
  return <div>{clientName}</div>;
}

function ClientsBox({ ...rest }) {
  const clients = useSelector((state: RootState) => state.clients);

  return (
    <Box
      p="1"
      bgColor="light"
      w={["0", "0", "10vw", "15vw", "15vw"]}
      display={["none", "none", "block", "block", "block"]}
      borderRadius="0.5rem"
      {...rest}
    >
      <Text fontWeight="bold">Online</Text>
      {Object.keys(clients).map((clientId, i) => (
        <ClientListing clientName={clients[clientId].name} key={i} />
      ))}
    </Box>
  );
}

export default ClientsBox;
