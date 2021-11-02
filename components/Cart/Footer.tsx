import React, { FC } from "react";
import {
  Button,
  DrawerFooter,
  Link,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";

interface FooterProps {
  total: string;
  text: string;
}

const Footer: FC<FooterProps> = ({ total, text }) => {
  return (
    <>
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
            color="white"
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
    </>
  );
};
export default Footer;
