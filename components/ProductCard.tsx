import React, { FC, useState } from "react";
import {
  Button,
  Stack,
  Text,
  Box,
  Image,
  Fade,
  useColorModeValue
} from "@chakra-ui/react";
import { FaBeer, FaSun } from "react-icons/fa";

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
      <Box
        height={300}
        bgGradient={useColorModeValue(
          "linear(to-l, gray.100, gray.200)",
          "linear(to-l, gray.700, gray.600)"
        )}
        borderRadius="md"
        mt={20}
        pos={"relative"}
        key={product.id}
        boxShadow="xl"
        rounded="md"
        cursor="pointer"
        _hover={{
          boxShadow: "2xl",
          transition: "0.8s"
        }}
        onMouseOver={over}
        onMouseOut={out}
      >
        <Stack direction="row">
          {" "}
          <Image
            width={200}
            height={300}
            mb={5}
            objectFit="cover"
            borderRadius="md"
            src={product.image}
          />
          <Stack
            direction="column"
            justifyContent="center"
            align="center"
            _hover={{ mt: -10 }}
          >
            {" "}
            <Text
              fontSize="2xl"
              color="primary.800"
              fontWeight={500}
              textAlign="center"
            >
              {product.title}
            </Text>
            <Text fontSize="lg" color="primary.800" textAlign="center">
              {product.description}{" "}
            </Text>
            <Fade delay={0.3} in={isVisible}>
              <Stack
                display={isVisible ? "flex" : "none"}
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="lg" color="green.500" fontWeight="500">
                  {parseCurrency(product.price)}
                </Text>
                <Button
                  width="90%"
                  size="sm"
                  bg={useColorModeValue("gray.400", "gray.800")}
                  fontWeight="bold"
                  color="white"
                  boxShadow="xl"
                  variant="solid"
                  onClick={() => onAdd(product)}
                  leftIcon={
                    <Image
                      src={
                        "https://icongr.am/fontawesome/cart-plus.svg?size=24&color=ffffff"
                      }
                    />
                  }
                />
              </Stack>
            </Fade>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default ProductCard;
