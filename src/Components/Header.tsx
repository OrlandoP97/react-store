import { Box, Heading } from "@chakra-ui/react";

function Header({ title }: any) {
  return (
    <Box p={4} boxShadow="md">
      <Heading>{title}</Heading>
    </Box>
  );
}

export default Header;
