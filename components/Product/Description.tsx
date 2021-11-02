import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionProps {
  title: string;
  description: string;
}

const Description: FC<DescriptionProps> = ({ title, description }) => {
  return (
    <>
      <Text
        fontSize="2xl"
        color="primary.800"
        fontWeight={500}
        textAlign="center"
      >
        {title}
      </Text>
      <Text fontSize="lg" color="primary.800" textAlign="center">
        {description}
      </Text>
    </>
  );
};
export default Description;
