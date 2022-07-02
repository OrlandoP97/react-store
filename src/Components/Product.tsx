import {
  Box,
  Heading,
  Text,
  Tag,
  Image,
  SimpleGrid,
  GridItem,
  Button,
  HStack,
} from "@chakra-ui/react";

import { useParams, useLocation } from "react-router-dom";

const Header = ({ title }: any) => (
  <Box>
    <Heading p={4} boxShadow="md">
      {title}{" "}
    </Heading>
  </Box>
);

export default function Product() {
  let params = useParams();
  const state: any = useLocation().state;

  if (!state) {
    window.location.assign("/");
  }

  return (
    <Box>
      <Header title={state.title}></Header>
      <Box p={8} display="flex" alignItems="center">
        <Box ml={4}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Image w={"sm"} src={state.image} />
            </GridItem>

            <GridItem colSpan={3}>
              <Heading>Price: ${state.price}</Heading>
              <Tag as="i" mt={2}>
                {state.category}
              </Tag>
              <Text mt={3}>{state.description}</Text>
              <HStack mt={4}>
                <Button w="xs" size="sm" colorScheme="purple">
                  Buy Now
                </Button>
                <Button w="xs" size="sm">
                  Share Product
                </Button>
              </HStack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
