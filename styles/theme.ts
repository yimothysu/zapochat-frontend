import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      900: "#FDC830",
      800: "#FDC830",
      700: "#FDC830",
      600: "#FDC830",
      500: "#F37335",
      400: "#F37335",
      300: "#F37335",
      200: "#F37335",
      100: "#F37335",
      50: "#F37335",
    },
  },
  semanticTokens: {
    colors: {
      light: {
        default: "gray.100",
        _dark: "rgba(255, 255, 255, 0.11)",
      },
      lightBorder: {
        default: "gray.300",
        _dark: "whiteAlpha.400",
      },
      lightDark: {
        default: "white",
        _dark: "gray.800",
      },
    },
  },
});
