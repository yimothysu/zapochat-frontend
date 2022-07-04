import { Badge, Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { ReceiveMsg } from "types/msg";

interface MsgElemProps {
  msg: ReceiveMsg;
}

function MsgElem({ msg }: MsgElemProps) {
  return (
    <div>
      <Badge>{new Date(msg.time).toLocaleTimeString()}</Badge>
      <Text display="inline" p="2" fontWeight="bold">
        {msg.fromName}
      </Text>
      <Box display="inline">{msg.text}</Box>
    </div>
  );
}

function MessagesBox({ ...rest }) {
  const msgs = useSelector((state: RootState) => state.msgs);
  const channel = useSelector((state: RootState) => state.channel);

  const msgsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    msgsRef.current?.scrollBy({
      top: msgsRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [msgs]);

  return (
    <Box
      ref={msgsRef}
      p="1"
      pb="2rem"
      overflowY="scroll"
      h="calc(100vh - 5rem)"
      {...rest}
    >
      {msgs[channel].map((msg, id) => (
        <MsgElem msg={msg} key={id} />
      ))}
    </Box>
  );
}

export default MessagesBox;
