import {
  Box,
  ChakraProps,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores/store";
import { setChannelsDrawerOpen } from "stores/uiSlice";

type DrawerOrBoxProps = {
  children: React.ReactNode;
};

function ChannelsDrawer({ children, ...rest }: DrawerOrBoxProps & ChakraProps) {
  const isChannelsDrawerOpen = useSelector(
    (state: RootState) => state.ui.channelsDrawerOpen
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen !== isChannelsDrawerOpen) {
      if (isChannelsDrawerOpen) {
        onOpen();
        dispatch(setChannelsDrawerOpen(false));
      }
    }
  }, [isChannelsDrawerOpen]);

  return (
    <Box display={["block", "none", "none", "none", "none"]}>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerContent {...rest}>
          <Flex flexDir="column">
            <Box h="90vh" overflowY="scroll">
              {children}
            </Box>
            <Flex justifyContent="right" h="10%">
              <IconButton
                icon={<FiX />}
                aria-label="Close channels drawer"
                onClick={onClose}
                mt="1"
                variant="ghost"
              />
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function ChannelsBox({ children, ...rest }: DrawerOrBoxProps & ChakraProps) {
  return (
    <Box
      w={["0", "20vw", "15vw", "15vw", "15vw"]}
      display={["none", "block", "block", "block", "block"]}
      borderBottomRightRadius="0.5rem"
      {...rest}
    >
      {children}
    </Box>
  );
}

type ChannelsWrapperProps = {
  children: React.ReactNode;
};

function ChannelsWrapper({
  children,
  ...rest
}: ChannelsWrapperProps & ChakraProps) {
  return (
    <>
      <ChannelsDrawer
        display={["block", "none", "none", "none", "none"]}
        {...rest}
      >
        {children}
      </ChannelsDrawer>
      <ChannelsBox
        display={["none", "block", "block", "block", "block"]}
        {...rest}
      >
        {children}
      </ChannelsBox>
    </>
  );
}

export default ChannelsWrapper;
