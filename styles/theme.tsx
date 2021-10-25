import { extendTheme, theme } from "@chakra-ui/react";

import { information } from "../utils/constants";

export default extendTheme({
  colors: {
    primary: theme.colors[information.color]
  },
  styles: {
    global: {
      body: {
        backgroundColor: "primary.50"
      }
    }
  }
});
