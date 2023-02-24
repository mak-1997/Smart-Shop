import React from "react";
import {
  Box,
  Select,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setMaxPrice,
  setSortingOrder,
} from "../redux/Products/products.action";
import { HamburgerIcon } from "@chakra-ui/icons";

const SidebarLarge = () => {
  const [cat, setCat] = React.useState("");
  const [price, setPrice] = React.useState(Infinity);
  const [order, setOrder] = React.useState("");

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
    dispatch(setSortingOrder(cat, price, event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCat(event.target.value);
    dispatch(setCategory(event.target.value, price, order));
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    dispatch(setMaxPrice(cat, event.target.value, order));
  };

  return (
    <>
      <Box display={{ base: "block", lg: "none" }}>
        <IconButton
          position={"fixed"}
          top="50px"
          aria-label="Open Sidebar"
          icon={<HamburgerIcon />}
          size="lg"
          onClick={onOpen}
          variant="ghost"
        />
      </Box>
      <Box
        display={{ base: "none", lg: "block" }}
        position="fixed"
        top="50px"
        left="0"
        height="100vh"
        width={{ lg: "15rem", "2xl": "20rem" }}
        bg="gray.50"
        p="6"
        overflowY="auto"
        borderRightWidth="1px"
      >
        <Text as="b" fontSize={"lg"}>
          Filter Products
        </Text>
        <Select placeholder="Order By" onChange={handleOrderChange}>
          <option value="asc">Ascending Price</option>
          <option value="desc">Descending Price</option>
        </Select>
        <Select placeholder="Category" onChange={handleCategoryChange}>
          <option value="mensJacket">Jacket</option>
          <option value="mensTshirt">T-shirt</option>
          <option value="mensTrouser">Trousers</option>
        </Select>
        <Select placeholder="Price Range" onChange={handlePriceChange}>
          <option value="400">Upto 400</option>
          <option value="500">Upto 500</option>
          <option value="700">Upto 700</option>
          <option value="1500">Upto 1500</option>
        </Select>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Products</DrawerHeader>
          <DrawerBody>
            <Select placeholder="Order By" onChange={handleOrderChange}>
              <option value="asc">Ascending Price</option>
              <option value="desc">Descending Price</option>
            </Select>
            <Select placeholder="Category" onChange={handleCategoryChange}>
              <option value="mensJacket">Jacket</option>
              <option value="mensTshirt">T-shirt</option>
              <option value="mensTrouser">Trousers</option>
            </Select>
            <Select placeholder="Price Range" onChange={handlePriceChange}>
              <option value="400">Upto 400</option>
              <option value="500">Upto 500</option>
              <option value="700">Upto 700</option>
              <option value="1500">Upto 1500</option>
            </Select>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarLarge;
