import { ReactNode, useRef, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddProductInAdmin } from "../redux/Admin/admin.action";

export default function AdminNav() {
  const initialState = {
    title: "",
    poster: "",
    price: 0,
    isAdded: false,
    category: "",
    avilableQuantity: 0,
    orderedQuantity: 0,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleClick = () => {
    dispatch(AddProductInAdmin(input));
    setInput(initialState);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <RouterLink to="/">
              <Box>Logo</Box>
            </RouterLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <RouterLink to="/admin/users">
                <Box
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  Users
                </Box>
              </RouterLink>
              <RouterLink to="/admin/products">
                <Box
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  Products
                </Box>
              </RouterLink>

              <Box
                px={2}
                py={1}
                onClick={onOpen}
                cursor="pointer"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                Add Product
              </Box>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                onChange={handleChange}
                name="title"
                value={input.title}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Poster</FormLabel>
              <Input
                placeholder="Image"
                onChange={handleChange}
                name="poster"
                value={input.poster}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                onChange={handleChange}
                name="price"
                value={input.price}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>isAdded</FormLabel>
              <Input
                placeholder="isAdded"
                onChange={handleChange}
                name="isAdded"
                value={input.isAdded}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Category"
                onChange={handleChange}
                name="category"
                value={input.category}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>AvailableQty</FormLabel>
              <Input
                placeholder="AvailableQty"
                onChange={handleChange}
                name="avilableQuantity"
                type="number"
                value={input.avilableQuantity}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>OrderQty</FormLabel>
              <Input
                placeholder="OrderQty"
                onChange={handleChange}
                name="orderedQuantity"
                value={input.orderedQuantity}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
