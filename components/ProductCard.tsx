import React, { FC, useState } from "react";
import {
  Button,
  Stack,
  Text,
  Box,
  Image,
  Fade,
  useColorModeValue,
  transition
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
      <Stack
        height={260}
        bgGradient={useColorModeValue(
          "linear(to-l, gray.50, gray.200)",
          "linear(to-l, gray.700, gray.600)"
        )}
        rounded="3xl"
        mt={10}
        pos={"relative"}
        key={product.id}
        boxShadow="xl"
        cursor="pointer"
        _hover={{
          boxShadow: "2xl",
          transition: "0.8s"
        }}
        onMouseOver={over}
        onMouseOut={out}
      >
        <Stack direction="row" justifyContent="center" alignItems="center">
          {" "}
          <Stack
            height={260}
            width={400}
            bgGradient={useColorModeValue(
              "linear-gradient(to top, #00b4db, #0083b0)",
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
            <Image
              mb={5}
              objectFit="cover"
              borderRadius="md"
              src={product.image}
              _hover={{ marginBottom: 20, marginRight: 10, transition: "0.8s" }}
            />
          </Stack>
          <Stack
            direction="column"
            p={3}
            _hover={{ mt: -5, transition: "0.8s" }}
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
      </Stack>
    </>
  );
};
export default ProductCard;
