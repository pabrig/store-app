import React, { FC } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Flex,
  Link
} from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";

import theme from "../styles/theme";
import { information } from "../utils/constants";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Box padding={4}>
      <ChakraProvider theme={theme}>
        <Divider marginY={3} />
        <Container
          backgroundColor="white"
          boxShadow="md"
          marginY={5}
          maxWidth="container.xl"
          padding={5}
          borderRadius={15}
        >
          <Stack spacing={4} marginBottom={{ base: 8, sm: 20 }}>
            <Image
              borderRadius="lg"
              height={{ base: 100, sm: "100%" }}
              maxHeight={28}
              margin={4}
              src={information.banner}
            />

            <Stack
              alignItems="center"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 3, sm: 6 }}
            >
              <Box
                padding={1}
                backgroundColor="white"
                marginTop={{ base: -16, sm: -20 }}
                borderRadius={9999}
                height={32}
              >
                {" "}
                <Image
                  borderRadius={9999}
                  height={{ base: 28, sm: 32 }}
                  src={information.avatar}
                />
              </Box>

              <Stack textAlign={{ base: "center", sm: "left" }}>
                {" "}
                <Heading>{information.title}</Heading>
                <Text color="gray.500" fontWeight="600">
                  {information.description}
                </Text>
                <Stack direction="row" spacing={4}>
                  {information.social.map((social) => (
                    <Link key={social.name} isExternal href={social.link}>
                      <Flex
                        height={12}
                        width={12}
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor="primary.500"
                        color="white"
                        borderRadius={99999}
                      >
                        <Image
                          src={`https://icongr.am/fontawesome/${social.name}.svg?size=28&color=ffffff`}
                        />
                      </Flex>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Box>
  );
};

export default App;
