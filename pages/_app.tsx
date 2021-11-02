import React, { FC } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";

import theme from "../styles/theme";
import ColorModeSwitcher from "../components/SwitcherColor/ColorModeSwitcher";
import { information } from "../utils/constants";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Box padding={4}>
      <ChakraProvider theme={theme}>
        <Container
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
                padding={{ base: 2, sm: 2 }}
                marginTop={{ base: -16, sm: -20 }}
                borderRadius={9999}
                height={{ base: 32, sm: 36 }}
                bg={useColorModeValue("gray.100", "gray.900")}
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
                <Stack direction="row" spacing={4} alignItems="center">
                  {information.social.map((social) => (
                    <Link key={social.name} isExternal href={social.link}>
                      <Flex
                        height={12}
                        width={12}
                        alignItems="center"
                        justifyContent="center"
                        bg={useColorModeValue("gray.300", "gray.900")}
                        borderRadius={99999}
                      >
                        <Image
                          src={`https://icongr.am/fontawesome/${
                            social.name
                          }.svg?size=28&color=${useColorModeValue(
                            "gray.700",
                            "gray.50"
                          )}`}
                        />
                      </Flex>
                    </Link>
                  ))}
                  <ColorModeSwitcher />
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
