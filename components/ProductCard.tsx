import React, { FC, useState } from "react";
import { Button, Stack, Text, Box, Image } from "@chakra-ui/react";

import { Product } from "../types/types";
import parseCurrency from "../utils/helpers";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAdd }) => {
  const [isVisible, setIsVisible] = useState(false);

  function over() {
    setIsVisible(true);
  }
  function out() {
    setIsVisible(false);
  }
  return (
    <>
      <Stack
        height={300}
        backgroundColor="primary.100"
        borderRadius="md"
        pos={"relative"}
        padding={10}
        spacing={10}
        key={product.id}
        boxShadow="xl"
        p="6"
        rounded="md"
        cursor="pointer"
        _hover={{ boxShadow: "dark-lg" }}
        onMouseOver={over}
        onMouseOut={out}
      >
        <Stack
          spacing={1}
          maxW={"330px"}
          w={"full"}
          objectFit="cover"
          borderRadius="md"
          mt={5}
          _hover={{
            mt: -10,
            transition: "0.8s"
          }}
        >
          <Image
            width="100%"
            maxHeight={128}
            mb={5}
            objectFit="cover"
            borderRadius="md"
            src={product.image}
            _hover={{ boxShadow: "dark-lg" }}
          />

          <Text
            fontSize="2xl"
            color="primary.800"
            fontWeight={500}
            textAlign="center"
          >
            {product.title}
          </Text>
          <Text fontSize="lg" textAlign="center">
            {product.description}{" "}
          </Text>
          <Stack textAlign="center" display={isVisible ? "block" : "none"}>
            <Text fontSize="lg" color="green.500" fontWeight="500">
              {parseCurrency(product.price)}
            </Text>
            <Button
              size="sm"
              bg="primary.400"
              fontWeight="bold"
              color="white"
              boxShadow="xl"
              variant="solid"
              onClick={() => onAdd(product)}
            >
              Agregar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default ProductCard;
