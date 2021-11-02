import React, { FC, useState } from "react";
import { Stack, useColorModeValue, Text, Fade } from "@chakra-ui/react";

import { Product } from "../../types/types";
import Images from "./Images";
import Description from "./Description";
import parseCurrency from "../../utils/helpers";
import ButtonOnAdd from "./ButtonOnAdd";

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
        height={310}
        bgGradient={useColorModeValue(
          "linear(to-t, gray.300, gray.100)",
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
          <Images image={product.image} />
          <Stack
            direction="column"
            width={320}
            _hover={{ mt: -5, transition: "0.8s" }}
          >
            <Description
              title={product.title}
              description={product.description}
            />
            <Fade delay={0.3} in={isVisible}>
              <Stack
                display={isVisible ? "flex" : "none"}
                justifyContent="center"
                alignItems="center"
                mt={10}
              >
                <Text
                  fontSize="lg"
                  color={useColorModeValue("green.400", "green.300")}
                  fontWeight="700"
                >
                  {parseCurrency(product.price)}
                </Text>
                <ButtonOnAdd onAdd={() => onAdd(product)} />
              </Stack>
            </Fade>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default ProductCard;
