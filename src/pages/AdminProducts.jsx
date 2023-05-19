import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Box,
} from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductInAdmin,
  DeleteAdminProducts,
  getAdminProducts,
  UpdateProductInAdmin,
} from "../redux/Admin/admin.action";
import Loading from "./Loading";
import SidebarAdmin from "../component/SidebarAdmin";
import { AiOutlineFileAdd } from "react-icons/ai";

function AdminProducts() {
  const initialState = {
    title: "",
    poster: "",
    price: 0,
    category: "",
    avilableQuantity: 0,
    orderedQuantity: 0,
  };
  const { isLoading,  products } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const [addProduct, setAddProduct] = useState(initialState);

  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(DeleteAdminProducts(id));

    setTimeout(() => {
      toast({
        title: `Product ${id} Deleted`,
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleClick = (id, onOpen) => {
    onOpen();
    setActive(false);
    if (id) {
      const toUpdate = products.find((item) => item.id === Number(id));
      setCurrentProduct(toUpdate);
    }
  };

  const handleUpdate = () => {
    dispatch(UpdateProductInAdmin(currentProduct.id, currentProduct));
    onClose();
  };

  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setAddProduct({ ...addProduct, [name]: value });
  };
  const handleAddClick = () => {
    onOpen();
    setActive(true);
  };

  const handleAdd = () => {
    dispatch(AddProductInAdmin(addProduct));
    setAddProduct(initialState);
    onClose();
  };
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAdminProducts());
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <SidebarAdmin />
      <Box margin={"auto"} ml={"20%"} width={["90%", "80%"]}>
        <Heading mt={8} mb={8} textAlign={"center"}>
          All Products
        </Heading>
        <Button
          ml={"85%"}
          mb={8}
          leftIcon={<AiOutlineFileAdd />}
          colorScheme="teal"
          variant="solid"
          onClick={handleAddClick}
        >
          Add Product
        </Button>
        <Box maxHeight={"500px"} overflow="scroll">
          <TableContainer height={"60%"}>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Title</Th>
                  <Th>Poster</Th>
                  <Th>Price</Th>
                  <Th isNumeric>AvailableQty</Th>
                  <Th isNumeric>OrderQty</Th>
                  <Th>Update</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((item) => (
                  <Tr>
                    <Td>{item.id}</Td>
                    <Td>{item.title}</Td>
                    <Td>
                      <Image src={item.poster} width="100%" />
                    </Td>
                    <Td>{item.price}</Td>
                    <Td>{item.avilableQuantity}</Td>
                    <Td>{item.orderedQuantity}</Td>
                    <Td>
                      <Button
                        colorScheme="green"
                        onClick={() => handleClick(item.id, onOpen)}
                      >
                        <BiEdit />
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(item.id)}
                      >
                        <MdDeleteForever />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total Products :- {products.length}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        {!active && (
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Product</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                    value={currentProduct.title}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Poster</FormLabel>
                  <Input
                    placeholder="Image"
                    onChange={handleChange}
                    name="poster"
                    value={currentProduct.poster}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Price"
                    onChange={handleChange}
                    name="price"
                    value={currentProduct.price}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Input
                    placeholder="Category"
                    onChange={handleChange}
                    name="category"
                    value={currentProduct.category}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>AvailableQty</FormLabel>
                  <Input
                    placeholder="AvailableQty"
                    onChange={handleChange}
                    name="avilableQuantity"
                    type="number"
                    value={currentProduct.avilableQuantity}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>OrderQty</FormLabel>
                  <Input
                    placeholder="OrderQty"
                    onChange={handleChange}
                    name="orderedQuantity"
                    value={currentProduct.orderedQuantity}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                  Update
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        {active && (
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
                    onChange={handleChangeAdd}
                    name="title"
                    value={addProduct.title}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Poster</FormLabel>
                  <Input
                    placeholder="Image"
                    onChange={handleChangeAdd}
                    name="poster"
                    value={addProduct.poster}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Price"
                    onChange={handleChangeAdd}
                    name="price"
                    value={addProduct.price}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Input
                    placeholder="Category"
                    onChange={handleChangeAdd}
                    name="category"
                    value={addProduct.category}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>AvailableQty</FormLabel>
                  <Input
                    placeholder="AvailableQty"
                    onChange={handleChangeAdd}
                    name="avilableQuantity"
                    type="number"
                    value={addProduct.avilableQuantity}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>OrderQty</FormLabel>
                  <Input
                    placeholder="OrderQty"
                    onChange={handleChangeAdd}
                    name="orderedQuantity"
                    value={addProduct.orderedQuantity}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAdd}>
                  Add
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
}

export default AdminProducts;
