import { Button, useColorMode } from "@chakra-ui/react";

function ColorModeButton({ ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} {...rest}>
      {
        {
          light: "Light Mode",
          dark: "Dark Mode",
        }[colorMode]
      }
    </Button>
  );
}

export default ColorModeButton;
