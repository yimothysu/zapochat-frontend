import { Box, Flex, Icon, LinkBox, Text } from "@chakra-ui/react";
import ColorModeButton from "components/ColorModeButton/ColorModeButton";
import { FiExternalLink, FiZap } from "react-icons/fi";

function Header() {
  return (
    <Flex
      p="1"
      pl="3"
      color="white"
      bgGradient="linear(30deg, primary.500, primary.600)"
      justifyContent="space-between"
    >
      <Flex gap="10" alignItems="center">
        <Box fontWeight="900">
          <Icon as={FiZap} verticalAlign="middle" />
          <Text display="inline" pl="1" verticalAlign="middle">
            Zapochat
          </Text>
        </Box>
        <Box>
          <LinkBox
            fontSize="sm"
            verticalAlign="middle"
            display="inline"
            mr="1"
            _hover={{
              textDecoration: "underline",
            }}
          >
            <a href="https://zapochat.herokuapp.com" target="_blank">
              Zapochat Legacy
            </a>
          </LinkBox>
          <Icon as={FiExternalLink} verticalAlign="middle" />
        </Box>
      </Flex>
      <ColorModeButton size="xs" ml="10" colorScheme="blackAlpha" />
    </Flex>
  );
}

export default Header;
