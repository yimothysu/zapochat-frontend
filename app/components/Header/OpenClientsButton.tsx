import { IconButton } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setClientsDrawerOpen } from "stores/uiSlice";

function OpenDrawerButton() {
  const dispatch = useDispatch();

  return (
    <IconButton
      colorScheme="blackAlpha"
      size="xs"
      icon={<FiUser />}
      aria-label="Open clients drawer"
      fontSize="xl"
      display={["flex", "flex", "none", "none", "none"]}
      onClick={() => {
        dispatch(setClientsDrawerOpen(true));
      }}
    />
  );
}

export default OpenDrawerButton;
