import { Divider, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      {" "}
      <Divider marginY={4} />
      <Text textAlign="center">
        © Copyright {new Date().getFullYear()}. Hecho con ♥, por{" "}
        <Link isExternal href="https://github.com/pabrig">
          Pablo Rigalli
        </Link>
        .
      </Text>
    </>
  );
};

export default Footer;
