import React from 'react';
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Cart/cart.action";
import {
  updateAddProductsData,
  updateRemoveProductsData,
} from "../redux/Products/products.action";

function ProductCards(data) {
  const { poster, price, title, isAdded, id } = data;
  const dispatch = useDispatch();

  const handleCart = (event, data) => {
    event.preventDefault();
    if (isAdded) {
      dispatch(updateRemoveProductsData(data));
      dispatch(removeFromCart(data.id));
    } else {
      dispatch(updateAddProductsData(data));
      dispatch(addToCart(data));
    }
  };

  return (
    <Flex maxW="fit-content" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <RouterLink to={`/mensclothing/${id}`}>
          <Flex justifyContent={"center"}>
            <Image src={poster} alt={`Picture of ${title}`} roundedTop="lg" />
          </Flex>
        </RouterLink>

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              maxW={"200"}
            >
              {title}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="2xl">
                ₹
              </Box>
              {price}
            </Box>
            <Tooltip
              label={isAdded ? "Remove from cart" : "Add to cart"}
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a
                href={"#"}
                display={"flex"}
                onClick={(event) => handleCart(event, data)}
              >
                {isAdded ? (
                  <Icon
                    as={BsFillCartCheckFill}
                    h={7}
                    w={7}
                    alignSelf={"center"}
                  />
                ) : (
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                )}
              </chakra.a>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCards;
