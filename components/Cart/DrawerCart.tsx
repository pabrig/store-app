import React, { FC } from "react";
import {
  DrawerProps,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Text,
  CloseButton,
  useColorModeValue
} from "@chakra-ui/react";

import { Product } from "../../types/types";
import parseCurrency from "../../utils/helpers";
import Body from "./Body";
import Footer from "./Footer";

interface Props extends Omit<DrawerProps, "children"> {
  items: Product[];
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const DrawerCart: FC<Props> = ({
  isOpen,
  onClose,
  items,
  onDecrement,
  onIncrement,
  onDelete
}) => {
  const total = React.useMemo(
    () =>
      parseCurrency(
        items.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )
      ),
    [items]
  );
  const text = React.useMemo(
    () =>
      items
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.title}${
                product.quantity > 1 ? ` (X${product.quantity})` : ``
              } - ${parseCurrency(product.price * product.quantity)}\n`
            ),
          ``
        )
        .concat(`\nTotal: ${total}`),
    [items, total]
  );

  return (
    <>
      {" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue("gray.50", "gray.700")}>
          <DrawerHeader>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="3xl"> Tu Carrito</Text>
              <CloseButton onClick={onClose} />
            </Stack>
          </DrawerHeader>

          <DrawerBody data-testid="cart" paddingX={4}>
            <Stack>
              {items.length ? (
                items.map((product) => (
                  <Body
                    key={product.id}
                    title={product.title}
                    price={parseCurrency(product.price * product.quantity)}
                    quantity={product.quantity}
                    onDecrement={() => onDecrement(product)}
                    onIncrement={() => onIncrement(product)}
                    onDelete={() => onDelete(product)}
                  />
                ))
              ) : (
                <Text>No hay productos en tu carrito</Text>
              )}
            </Stack>
          </DrawerBody>

          {Boolean(items.length) && <Footer total={total} text={text} />}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerCart;
