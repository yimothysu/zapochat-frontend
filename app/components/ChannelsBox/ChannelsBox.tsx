import { Box, Button, Flex, IconButton, Modal, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiHash, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setChannel } from "stores/channelSlice";
import { RootState } from "stores/store";
import { AddChannelModal } from "./AddChannelModal";

type ChannelBoxProps = {
  name: string;
  selected: boolean;
};

function ChannelBox({ name, selected }: ChannelBoxProps) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(setChannel(name));
  }
  return (
    <Button
      onClick={onClick}
      fontWeight="normal"
      justifyContent="left"
      w="100%"
      h="fit-content"
      py="1"
      pl="2"
      pr="3"
      mt="1"
    >
      <FiHash />{" "}
      <Text pl="1" fontWeight={selected ? "bold" : "normal"}>
        {name}
      </Text>
    </Button>
  );
}

type AddChannelButtonProps = {
  onClick: () => void;
};

function AddChannelButton({ onClick }: AddChannelButtonProps) {
  return (
    <IconButton
      size="xs"
      // colorScheme="primary"
      icon={<FiPlus />}
      aria-label="Add Channel"
      onClick={onClick}
    />
  );
}

function ChannelsBox({ ...rest }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const msgs = useSelector((state: RootState) => state.msgs);
  const channel = useSelector((state: RootState) => state.channel);
  return (
    <Box
      p="1"
      w={["0", "20vw", "15vw", "15vw", "15vw"]}
      h="100%"
      display={["none", "block", "block", "block", "block"]}
      borderBottomRightRadius="0.5rem"
      {...rest}
    >
      <AddChannelModal
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      />
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">Channels</Text>
        <AddChannelButton
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </Flex>
      {Object.keys(msgs).map((key) => (
        <ChannelBox selected={channel === key} name={key} key={key} />
      ))}
    </Box>
  );
}

export default ChannelsBox;
