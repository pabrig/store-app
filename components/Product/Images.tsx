import React, { FC } from "react";
import { Stack, Image, useColorModeValue } from "@chakra-ui/react";

interface ImageProps {
  image: string;
  isModal: boolean;
}
const Images: FC<ImageProps> = ({ image, isModal }) => {
  return (
    <>
      {isModal ? (
        <Stack
          width={{ base: 280, sm: 400 }}
          height={{ base: 220, sm: 320 }}
          bgGradient={useColorModeValue(
            "linear-gradient(to bottom, #f2994a, #f2c94c)",
            "linear-gradient(to top, #1488cc, #2b32b2)"
          )}
          justifyContent="center"
          alignItems="center"
          rounded="3xl"
        >
          <Image
            width={210}
            p={5}
            objectFit="cover"
            borderRadius="md"
            src={image}
            cursor="pointer"
            _hover={{ transform: "scale(1.1)", transition: "0.8s" }}
          />
        </Stack>
      ) : (
        <Stack
          height={310}
          width={400}
          bgGradient={useColorModeValue(
            "linear-gradient(to bottom, #f2994a, #f2c94c)",
            "linear-gradient(to top, #1488cc, #2b32b2)"
          )}
          justifyContent="center"
          alignItems="center"
          rounded="3xl"
          _hover={{
            marginTop: -5,
            marginLeft: 5,
            boxShadow: "xl",
            transition: "1.1s"
          }}
        >
          <Image mb={5} objectFit="cover" borderRadius="md" src={image} />
        </Stack>
      )}
    </>
  );
};
export default Images;
