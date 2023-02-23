import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "../component/AdminNav";
import { DeleteAdminUser, getAdminUsers } from "../redux/Admin/admin.action";
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
  useToast,
  Button,
} from "@chakra-ui/react";

function Users() {
  const { isLoading, isError, users } = useSelector((store) => store.admin);

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
  return (
    <div>
      <AdminNav />
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
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
                <Td>{item.id}</Td>
                <Td>{item.firstname}</Td>

                <Td>{item.lastname}</Td>
                <Td>{item.email}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
