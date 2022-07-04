import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { createChannel } from "lib/sendEvents";
import { FormEvent, useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setChannel } from "stores/channelSlice";
import { newChannel } from "stores/msgsSlice";

type AddChannelModalProps = {
  isOpen: boolean;
  close: () => void;
};

export function AddChannelModal({ isOpen, close }: AddChannelModalProps) {
  const { onOpen, onClose } = useDisclosure();
  const inputElem = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputElem.current) {
      const name = inputElem.current.value;
      createChannel(name);
      dispatch(newChannel(name));
      dispatch(setChannel(name));
    }

    close();
  }

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a Channel</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Create a new channel to chat in.</Text>
          <Box pb="3" />
          <form onSubmit={handleSubmit}>
            <InputGroup size="md">
              <Input placeholder="Channel name" required ref={inputElem} />
              <InputRightElement>
                <IconButton
                  icon={<FiChevronRight />}
                  aria-label="Add channel"
                  type="submit"
                  size="sm"
                  fontSize="2xl"
                  colorScheme="primary"
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
