import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import { sendMessage } from "lib/sendEvents";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { EmojiButton } from "./EmojiButton";

function InputBox() {
  const inputElem = useRef<HTMLInputElement | null>(null);
  const channel = useSelector((state: RootState) => state.channel);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputElem.current?.value) {
      const text = inputElem.current?.value;
      sendMessage({
        channel: channel,
        text: text,
      });
      inputElem.current.value = "";
    }
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    if (inputElem.current) {
      inputElem.current.value += emojiObject.emoji;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        padding: "0.5rem",
      }}
    >
      <InputGroup size="md">
        <Input
          type="text"
          ref={inputElem}
          borderColor="lightBorder"
          placeholder="Send a message"
          bgColor="lightDark"
          _placeholder={{
            color: "gray",
          }}
        />
        <InputRightElement>
          <HStack mr="10">
            <EmojiButton onEmojiClick={onEmojiClick} />
            <IconButton
              type="submit"
              size="sm"
              icon={<FiChevronRight />}
              aria-label="Go"
              color="white"
              colorScheme="primary"
              fontSize="2xl"
            />
          </HStack>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default InputBox;
