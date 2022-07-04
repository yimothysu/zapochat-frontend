import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setChannelsDrawerOpen } from "stores/uiSlice";

function OpenDrawerButton() {
  const dispatch = useDispatch();

  return (
    <IconButton
      colorScheme="blackAlpha"
      size="xs"
      icon={<FiMenu />}
      aria-label="Open channels drawer"
      fontSize="l"
      display={["flex", "none", "none", "none", "none"]}
      onClick={() => {
        dispatch(setChannelsDrawerOpen(true));
      }}
    />
  );
}

export default OpenDrawerButton;
