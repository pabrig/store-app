import React, { FC } from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";

import Header from "../components/Header/Header";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Box padding={4}>
      <ChakraProvider>
        <Container
          boxShadow="md"
          marginY={5}
          maxWidth="container.xl"
          padding={5}
          borderRadius={15}
        >
          <Header />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Box>
  );
};

export default App;
