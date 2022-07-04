import EmojiPicker from "emoji-picker-react";
import {
  ChakraProps,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FiSmile } from "react-icons/fi";

type EmojiButtonProps = {
  onEmojiClick: (event: any, emojiObject: any) => void;
};

export function EmojiButton({
  onEmojiClick,
  ...rest
}: EmojiButtonProps & ChakraProps) {
  return (
    <Popover {...rest}>
      <PopoverTrigger>
        <IconButton
          size="sm"
          icon={<FiSmile />}
          aria-label="Pick Emoji"
          color="white"
          colorScheme="primary"
          fontSize="2xl"
        />
      </PopoverTrigger>
      <PopoverContent bgColor="transparent" border="none">
        <PopoverBody>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            pickerStyle={{ boxShadow: "none" }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
