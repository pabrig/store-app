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
import ButtonCart from "../components/ButtonCart";
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
            templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
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
        {Boolean(cart.length) && <ButtonCart onClick={onOpen} />}
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
