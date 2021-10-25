import React, { FC } from "react";
import { Button, Stack, Text, Box, Image } from "@chakra-ui/react";

import { Product } from "../types/types";
import parseCurrency from "../utils/helpers";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <>
      <Stack
        backgroundColor="primary.100"
        borderRadius="md"
        padding={4}
        spacing={4}
        key={product.id}
        boxShadow="xl"
        p="6"
        rounded="md"
      >
        <Stack spacing={1}>
          <Image
            maxHeight={128}
            objectFit="cover"
            borderRadius="md"
            src={product.image}
          />
          <Text color="primary.800" fontWeight={500}>
            {product.title}
          </Text>
          <Text fontSize="sm">{product.description}</Text>
        </Stack>

        <Stack
          alignItems="flex-end"
          direction="row"
          justifyContent="space-between"
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
