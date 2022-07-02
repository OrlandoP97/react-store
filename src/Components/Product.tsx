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
  Link
} from "@chakra-ui/react";
import { AiOutlineWhatsApp } from 'react-icons/all';
import { Link as LinkRouter } from "react-router-dom";

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
              
             
                <Button leftIcon={<AiOutlineWhatsApp/>} w="md" size="sm" colorScheme="whatsapp">
              <Link href="https://wa.me/5354175825" isExternal> Write us to buy now! </Link> 
                </Button>
                
              
              </HStack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
