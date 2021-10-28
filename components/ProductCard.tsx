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

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }
  return (
    <>
      <Stack
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
        _hover={{ boxShadow: "2xl", mt: "-10" }}
        onMouseOver={over}
        onMouseOut={out}
      >
        <Stack spacing={1}>
          <Box
            maxW={"330px"}
            w={"full"}
            objectFit="cover"
            borderRadius="md"
            _hover={{ mt: "-10", boxShadow: "dark-lg" }}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `{product.image}`,
              filter: "blur(15px)",
              zIndex: -1
            }}
          >
            <Image
              width="100%"
              maxHeight={128}
              objectFit="cover"
              borderRadius="md"
              src={product.image}
            />
          </Box>
          <Text color="primary.800" fontWeight={500}>
            {product.title}
          </Text>
          <Text fontSize="sm">{product.description}</Text>
        </Stack>

        <Stack
          alignItems="flex-end"
          direction="row"
          justifyContent="space-between"
          display={isVisible ? "block" : "none"}
        >
          <Text color="green.500" fontSize="sm" fontWeight="500">
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
    </>
  );
};
export default ProductCard;
