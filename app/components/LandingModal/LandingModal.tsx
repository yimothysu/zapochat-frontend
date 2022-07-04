import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { socket } from "lib/socketio";
import { newClient } from "stores/clientsSlice";
import { setName } from "stores/nameSlice";

function LandingModal() {
  const { onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const inputElem = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputElem.current) {
      const name = inputElem.current.value;
      dispatch(setName(name));
      dispatch(newClient({ id: socket.id, name: name }));
    }

    setIsOpen(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome to Zapochat!</ModalHeader>
        <ModalBody>
          <Text>Enter a name or pseudonym to start chatting.</Text>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              paddingTop: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            <InputGroup size="md">
              <Input
                type="text"
                ref={inputElem}
                borderColor="lightBorder"
                placeholder="Name"
              />
              <InputRightElement mr={1}>
                <Button type="submit" size="sm" colorScheme="primary">
                  Go
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LandingModal;
