import {
  Box,
  ChakraProps,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores/store";
import { setClientsDrawerOpen } from "stores/uiSlice";

type DrawerOrBoxProps = {
  children: React.ReactNode;
};

function ClientsDrawer({ children, ...rest }: DrawerOrBoxProps & ChakraProps) {
  const isClientsDrawerOpen = useSelector(
    (state: RootState) => state.ui.clientsDrawerOpen
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen !== isClientsDrawerOpen) {
      if (isClientsDrawerOpen) {
        onOpen();
        dispatch(setClientsDrawerOpen(false));
      }
    }
  }, [isClientsDrawerOpen]);

  return (
    <Box display={["block", "block", "none", "none", "none"]}>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerContent {...rest}>
          <DrawerCloseButton />
          {children}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

type ClientsWrapperProps = {
  children: React.ReactNode;
};

function ClientsWrapper({
  children,
  ...rest
}: ClientsWrapperProps & ChakraProps) {
  return (
    <>
      <Box
        bgColor="light"
        w={["0", "0", "10vw", "15vw", "15vw"]}
        display={["none", "none", "block", "block", "block"]}
        borderRadius="0.5rem"
        {...rest}
      >
        {children}
      </Box>
      <ClientsDrawer
        display={["flex", "flex", "none", "none", "none"]}
        {...rest}
      >
        {children}
      </ClientsDrawer>
    </>
  );
}

export default ClientsWrapper;
