import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAdminUser, getAdminUsers } from "../redux/Admin/admin.action";
import {
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

  useToast,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";

import Loading from "./Loading";
import SidebarAdmin from "../component/SidebarAdmin";

function AdminUsers() {
  const { isLoading, users } = useSelector((store) => store.admin);
  

  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(DeleteAdminUser(id));
    setTimeout(() => {
      toast({
        title: `User ${id} Removed`,
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getAdminUsers());
    }
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <SidebarAdmin />
      <Box margin={"auto"} ml={"20%"} width={["90%", "80%"]}>
        <Heading mt={"50px"} mb={"50px"} textAlign={"center"}>
          Users
        </Heading>
        <Box maxHeight={"500px"} overflow="scroll">
          <TableContainer overflowX={"auto"}>
            <Table variant="striped" colorScheme="teal" size={["sm", "md"]}>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Firstname</Th>
                  <Th>Lastname</Th>
                  <Th>Email</Th>
                  <Th>Delete User</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((item) => (
                  <Tr>
                    <Td>{item._id}</Td>
                    <Td>{item.firstname}</Td>

                    <Td>{item.lastname}</Td>
                    <Td>{item.email}</Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(item._id)}
                      >
                        <MdDeleteForever />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default AdminUsers;
