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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setMaxPrice,
  setSortingOrder,setOrder,setCat,setPrice,
} from "../redux/Products/products.action";
import { HamburgerIcon } from "@chakra-ui/icons";

const SidebarLarge = () => {
  
  const cat = useSelector((store) => store.products.cat);
  const price = useSelector((store) => store.products.price);
  const order = useSelector((store) => store.products.order);
  const page = useSelector((store) => store.products.page);
  

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOrderChange = (event) => {
    dispatch(setOrder(event.target.value));
    dispatch(setSortingOrder(cat, price, event.target.value,page));
  };

  const handleCategoryChange = (event) => {
    dispatch(setCat(event.target.value));
    dispatch(setCategory(event.target.value, price, order,page));
  };

  const handlePriceChange = (event) => {
    dispatch(setPrice(event.target.value));
    dispatch(setMaxPrice(cat, event.target.value, order,page));
  };

  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          position={"fixed"}
          top="47px"
          aria-label="Open Sidebar"
          icon={<HamburgerIcon />}
          size="lg"
          onClick={onOpen}
          variant="ghost"
        />
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        left="0"
        // height="100vh"
        // width={{ lg: "15rem", "2xl": "20rem" }}
        width={"fit-content"}
        bg="gray.50"
        // p="6"
        overflowY="auto"
        borderRightWidth="1px"
        // zIndex={"1000"}
      >
        <Select
          size="sm"
          maxWidth={"fit-content"}
          varient="sm"
          placeholder="Order By"
          onChange={handleOrderChange}
        >
          <option value="asc">Ascending Price</option>
          <option value="desc">Descending Price</option>
        </Select>
        <Select
          size="sm"
          maxWidth={"fit-content"}
          varient="sm"
          placeholder="Category"
          onChange={handleCategoryChange}
        >
          <option value="mensTshirt">T-shirt</option>
          <option value="mensJacket">Jacket</option>
          <option value="mensTrouser">Trousers</option>
        </Select>
        <Select
          size="sm"
          maxWidth={"fit-content"}
          varient="sm"
          placeholder="Price Range"
          onChange={handlePriceChange}
        >
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
            <Select
              placeholder="Order By"
              p="14px"
              onChange={handleOrderChange}
            >
              <option value="asc">Ascending Price</option>
              <option value="desc">Descending Price</option>
            </Select>
            <Select placeholder="Category" onChange={handleCategoryChange}>
              <option value="mensTshirt">T-shirt</option>
              <option value="mensJacket">Jacket</option>
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
