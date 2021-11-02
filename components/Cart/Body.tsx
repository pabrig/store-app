import React, { FC } from "react";
import { Divider, Stack, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";

interface BodyProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
  title: string;
  price: string;
  key: string;
  quantity: number;
}

const Body: FC<BodyProps> = ({
  onDecrement,
  onIncrement,
  onDelete,
  key,
  title,
  price,
  quantity
}) => {
  console.log("title:", title);
  return (
    <>
      <Stack
        key={key}
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
            <Text fontSize="lg">{title}</Text>
            <Text color="green.500">{price}</Text>
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
              onClick={onDecrement}
            />

            <Text data-testid="quantity" fontWeight="500">
              {quantity}
            </Text>

            <IconButton
              data-testid="increment"
              colorScheme="teal"
              aria-label="Increment units"
              size="xs"
              icon={<AddIcon />}
              onClick={onIncrement}
            />
            <IconButton
              data-testid="delete"
              colorScheme="red"
              aria-label="Call Segun"
              size="xs"
              icon={<DeleteIcon />}
              onClick={onDelete}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default Body;
