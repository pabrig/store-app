import React, { FC, useState, useMemo } from "react";
import {
  Button,
  DrawerProps,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Link,
  Stack,
  Text,
  CloseButton,
  Image,
  Divider,
  IconButton
} from "@chakra-ui/react";
import { DeleteIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";

import { Product } from "../types/types";
import parseCurrency from "../utils/helpers";

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

  // console.log(items);
  return (
    <>
      {" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
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
                  <Stack
                    key={product.id}
                    data-testid="cart-item"
                    boxShadow="md"
                    p="6"
                    rounded="md"
                  >
                    <Stack width="100%" marginBottom={5}>
                      <Stack
                        alignItems="center"
                        direction="row"
                        fontWeight="500"
                        justifyContent="space-between"
                      >
                        <Text fontSize="lg">{product.title}</Text>
                        <Text color="green.500">
                          {parseCurrency(product.price * product.quantity)}
                        </Text>
                      </Stack>
                    </Stack>
                    <Divider></Divider>

                    <Stack
                      direction="row"
                      margin="auto"
                      justifyContent="space-between"
                      spacing={4}
                    >
                      <Text>Unidades</Text>
                      <Stack direction="row" margin="auto">
                        <IconButton
                          data-testid="decrement"
                          colorScheme="teal"
                          aria-label="Decrement units"
                          size="xs"
                          icon={<MinusIcon />}
                          onClick={() => onDecrement(product)}
                        />

                        <Text data-testid="quantity" fontWeight="500">
                          {product.quantity}
                        </Text>

                        <IconButton
                          data-testid="increment"
                          colorScheme="teal"
                          aria-label="Increment units"
                          size="xs"
                          icon={<AddIcon />}
                          onClick={() => onIncrement(product)}
                        />
                        <IconButton
                          data-testid="delete"
                          colorScheme="red"
                          aria-label="Call Segun"
                          size="xs"
                          icon={<DeleteIcon />}
                          onClick={() => onDelete(product)}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                ))
              ) : (
                <Text>No hay productos en tu carrito</Text>
              )}
            </Stack>
          </DrawerBody>

          {Boolean(items.length) && (
            <DrawerFooter>
              <Stack width="100%">
                <Stack
                  direction="row"
                  fontWeight="500"
                  justifyContent="space-between"
                >
                  <Text fontSize="xl">Total </Text>
                  <Text fontSize="xl">{total}</Text>
                </Stack>
                <Button
                  isExternal
                  as={Link}
                  colorScheme="whatsapp"
                  data-testid="complete-order"
                  href={`https://wa.me/5491141414141?text=${encodeURIComponent(
                    text
                  )}`}
                  size="lg"
                  width="100%"
                  leftIcon={
                    <Image
                      src={
                        "https://icongr.am/fontawesome/whatsapp.svg?size=24&color=ffffff"
                      }
                    />
                  }
                >
                  Completar pedido
                </Button>
              </Stack>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerCart;
