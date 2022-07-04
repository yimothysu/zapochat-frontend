import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import ClientsWrapper from "./ClientsWrapper";

type ClientListingProps = {
  clientName: string;
};

function ClientListing({ clientName }: ClientListingProps) {
  return <div>{clientName}</div>;
}

function ClientsBox({ ...rest }) {
  const clients = useSelector((state: RootState) => state.clients);

  return (
    <ClientsWrapper p="2" {...rest}>
      <Text fontWeight="bold">Online</Text>
      {Object.keys(clients).map((clientId, i) => (
        <ClientListing clientName={clients[clientId].name} key={i} />
      ))}
    </ClientsWrapper>
  );
}

export default ClientsBox;
