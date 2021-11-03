import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionProps {
  title: string;
  short_description: string;
  long_description: string;
  isModal: boolean;
}

const Description: FC<DescriptionProps> = ({
  title,
  short_description,
  long_description,
  isModal
}) => {
  return (
    <>
      <Text
        fontSize="2xl"
        color="primary.800"
        fontWeight={500}
        textAlign="center"
        mt={4}
      >
        {title}
      </Text>
      {isModal ? (
        <Text fontSize="lg" color="primary.800" textAlign="center">
          {long_description}
        </Text>
      ) : (
        <Text fontSize="lg" color="primary.800" textAlign="center">
          {short_description}
        </Text>
      )}
    </>
  );
};
export default Description;
