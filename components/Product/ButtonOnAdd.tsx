import React, { FC } from "react";
import { useColorModeValue, Button, Image } from "@chakra-ui/react";

interface ButtonOnAddProps {
  onAdd: () => void;
}

const ButtonOnAdd: FC<ButtonOnAddProps> = ({ onAdd }) => {
  return (
    <>
      {" "}
      <Button
        width="100%"
        size="sm"
        bg={useColorModeValue("gray.500", "gray.800")}
        fontWeight="bold"
        color="white"
        boxShadow="xl"
        variant="solid"
        onClick={onAdd}
        leftIcon={
          <Image
            src={
              "https://icongr.am/fontawesome/cart-plus.svg?size=24&color=ffffff"
            }
          />
        }
      />
    </>
  );
};
export default ButtonOnAdd;
