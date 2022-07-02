import {
  Box,
  Heading,
  Stack,
  Text,
  Flex,
  Spacer,
  Tag,
  Image,
  SimpleGrid,
  GridItem,
  Center,
  Spinner,
  Input
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const StoreItem = ({ title, price, image }: any) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
        <Center>
        <Image src={image} w={24}/>
        </Center>
      <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">
        {title}
      </Heading>

      <Tag mt={5}>${price}</Tag>
    </Box>
  );
};

function Store({  }: any) {

  const [filteredItems,setFilteredItems]=useState([]);
  const [storeItem, setStoreItem] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }: any) => {
      setLoading(false);
      setStoreItem(data);
      setFilteredItems(data)
    });
  }, []);

  return (
    <Box>
      <Header title="MiniAmazon"/>
      {loading? <Center><Spinner mt={4}/></Center>:
      <Box p={2}>
      <Input placeholder="Search wat you want..." onChange={e=>{
        let f = storeItem.filter((item:any)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredItems(f)
      }}></Input> 
      <SimpleGrid columns={{base:1,md:4}} spacing={4} mt={4} padding={2}>
        {filteredItems.map((item: any) => {
          return <GridItem>
            <Link to={{
              pathname: `/product/${item.id}`,
              
            }}
            state={item}
            >
             <StoreItem {...item} />
             </Link>
             </GridItem>;
        })}
      </SimpleGrid>
      </Box>
      }
    </Box> 
  );
}

export default Store;
