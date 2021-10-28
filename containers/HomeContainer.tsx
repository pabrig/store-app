import React, { FC, useState } from "react";
import {
  Text,
  Grid,
  Stack,
  Button,
  Flex,
  useDisclosure
} from "@chakra-ui/react";

import { Product } from "../types/types";
import ProductCard from "../components/ProductCard";
import DrawerCart from "../components/DrawerCart";
import { editCart } from "../utils/helpers";
import parseCurrency from "../utils/helpers";

interface HomeContainerProps {
  products: Product[];
}

const HomeContainer: FC<HomeContainerProps> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = React.useMemo(
    () =>
      parseCurrency(
        cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )
      ),
    [cart]
  );
  const quantity = React.useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  function handleEditCart(
    product: Product,
    action: "increment" | "decrement" | "delete"
  ) {
    setCart(editCart(product, action));
  }

  return (
    <>
      <Stack>
        {" "}
        {products.length ? (
          <Grid
            gridGap={8}
            templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={(product) => handleEditCart(product, "increment")}
              />
            ))}
          </Grid>
        ) : (
          <Text>No hay productos</Text>
        )}
        {Boolean(cart.length) && (
          <Flex
            alignItems="center"
            justifyContent="center"
            bottom={4}
            position="sticky"
          >
            <Button
              size="lg"
              width="100%"
              margin="auto"
              padding={2}
              backgroundColor="green.400"
              boxShadow="2xl"
              color="white"
              onClick={onOpen}
            >
              <Stack alignItems="center" direction="row" spacing={8}>
                <Stack alignItems="center" direction="row" spacing={8}>
                  <Text fontSize="md" lineHeight={6}>
                    Ver Carrito
                  </Text>
                  <Text
                    backgroundColor="rgba(0,0,0,0.25)"
                    borderRadius="xs"
                    color="gray.100"
                    fontSize="s"
                    fontWeight="500"
                    paddingX={2}
                    paddingY={1}
                  >
                    {quantity} items
                  </Text>
                </Stack>
                <Text fontSize="md" lineHeight={6}>
                  {total}
                </Text>
              </Stack>
            </Button>
          </Flex>
        )}
        <DrawerCart
          items={cart}
          isOpen={isOpen}
          onClose={onClose}
          onDecrement={(product) => handleEditCart(product, "decrement")}
          onIncrement={(product) => handleEditCart(product, "increment")}
          onDelete={(product) => handleEditCart(product, "delete")}
        />
      </Stack>
    </>
  );
};
export default HomeContainer;
