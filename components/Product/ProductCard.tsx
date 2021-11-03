import React, { FC, useState } from "react";
import {
  Stack,
  useColorModeValue,
  Text,
  Fade,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  IconButton,
  ModalCloseButton
} from "@chakra-ui/react";

import { Product } from "../../types/types";
import Images from "./Images";
import Description from "./Description";
import parseCurrency from "../../utils/helpers";
import ButtonOnAdd from "./ButtonOnAdd";
import { DeleteIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  onOpen: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAdd }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Images isModal={false} image={product.image} />
          <Stack
            direction="column"
            width={320}
            _hover={{ mt: -5, transition: "0.8s" }}
          >
            <Description
              isModal={false}
              title={product.title}
              short_description={product.short_description}
              long_description={product.long_description}
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

                <Button
                  width="90%"
                  bg={useColorModeValue("gray.500", "gray.800")}
                  fontWeight="bold"
                  color="white"
                  boxShadow="xl"
                  variant="solid"
                  onClick={onOpen}
                >
                  Ver Producto
                </Button>
                <Modal
                  blockScrollOnMount={false}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent
                    width={{ base: 330, sm: 450 }}
                    mt={{ base: 40, sm: 20 }}
                    rounded="3xl"
                  >
                    <ModalHeader> </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Images isModal image={product.image} />
                      <Description
                        isModal={true}
                        title={product.title}
                        short_description={product.short_description}
                        long_description={product.long_description}
                      />
                    </ModalBody>

                    <ModalFooter>
                      <ButtonOnAdd onAdd={() => onAdd(product)} />
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Fade>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default ProductCard;

//isModal Boolean
