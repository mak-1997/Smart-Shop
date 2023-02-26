import React, { useEffect, useState } from "react";
//-----------Chakra UI Components-------
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  Text,
  Image,
  Button,
  PopoverFooter,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  useToast,
} from "@chakra-ui/react";
//-----------ICONS----------------------
import { TiThSmall } from "react-icons/ti";
import { ImUserCheck } from "react-icons/im";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsQuestionCircle, BsShop, BsCart2 } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdOutlineMessage, MdSendToMobile } from "react-icons/md";
import { BiMessageDetail, BiMobile, BiUserCircle } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSetting, AiOutlineTag } from "react-icons/ai";
import { Link } from "react-router-dom";

//-----------***------------------------------------------------------------------
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUsersData,
  LoginCheck,
  LogoutUser,
  RegisterUser,
} from "../redux/Auth/auth.action";
import { getItemSession } from "../utility/localStorage";
import { getCartItems } from "../redux/Cart/cart.action";

const Navbar = () => {
  const initState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Registarion, setRegistarion] = useState(false);
  const [admin, setAdmin] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [cred, setCred] = useState(initState);
  const [login, setLogin] = useState({});
  const [conform, setConform] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const cartData = useSelector((store) => store.cart.data);


  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const { isLoading, username, isAuth, users } = useSelector(
    (store) => store.auth
  );

  const dispatch = useDispatch();

  const handleRegister = () => {
    try {
      dispatch(RegisterUser(cred)).then((res) => dispatch(GetUsersData()));
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    let user = users.find(
      (item) => item.email === login.email && item.password === login.password
    );
    try {
      setTimeout(() => {
        if (user) {
          dispatch(LoginCheck(user.firstname));
          toast({
            title: "successfully sign in ",
            description: "",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          onClose();
          navigate("/");
        } else {
          toast({
            title: "wrong username or password ",
            description: "",
            status: "error",
            duration: 5000,
            isClosable: true,
            backgroundColor: "red",
          });
        }
      }, 1000);
    } catch (error) {}
  };

  const handleLogout = () => {
    dispatch(LogoutUser());
  };
  let styleNev = {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
    width: "100%",
  };

  useEffect(() => {
    if (users.length === 0) {
      dispatch(GetUsersData());
      dispatch(getCartItems());
    }
  }, []);

  return (
    <>
      <Box backgroundColor="#2E3192" style={styleNev}>
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={{ base: 3, md: 8 }} alignItems={"center"}>
            <Link to="/">
              <Box w={["120px", "140px", "160px", "200px"]}>
                <Image ml={{ sm: "10px", md: "20px", lg: "30px" }} src={Logo} />
              </Box>
            </Link>
            {/* <Input placeholder='search' display={{base:"none", md:"flex"}} /> */}
          </HStack>
          <Flex alignItems={"center"} w={{ md: "75%", md: "40%", lg: "30%" }}>
            <Box
              justifyContent="space-around"
              w="100%"
              display={{ base: "none", md: "flex" }}
            >
              <Box align="center">
                <Link to="/mensclothing">
                  <AiOutlineTag
                    fontSize="20px"
                    color="#dbdbdb"
                    cursor="pointer"
                  />
                  <Text cursor="pointer" fontSize="12px" color="white">
                    Shopping
                  </Text>
                </Link>
              </Box>
              <Box align="center">
                <BsShop fontSize="20px" color="#dbdbdb" cursor="pointer" />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Sell
                </Text>
              </Box>
              <Box align="center">
                <BsQuestionCircle
                  fontSize="20px"
                  color="#dbdbdb"
                  cursor="pointer"
                />
                <Text cursor="pointer" fontSize="12px" color="white">
                  Find
                </Text>
              </Box>
              <Box align="center">
                <Link to="/cart">
                  <Box display="flex" gap="1">
                    <BsCart2 fontSize="20px" color="#dbdbdb" cursor="pointer" />
                    <Box bg="white" h="1rem" w="1rem" borderRadius={"50%"} display="flex" justifyContent="center" alignItems="center">
                      <Text as="b" fontSize={"smaller"}> {cartData.length} </Text>
                    </Box>
                  </Box>
                  <Text cursor="pointer" fontSize="12px" color="white">
                    Cart
                  </Text>
                </Link>
              </Box>
              <Popover>
                <PopoverTrigger>
                  <Box align="center">
                    <BiUserCircle
                      fontSize="20px"
                      color="#dbdbdb"
                      cursor="pointer"
                    />
                    {username ? (
                      <Text cursor="pointer" fontSize="12px" color="white">
                        {username}
                      </Text>
                    ) : (
                      <Text cursor="pointer" fontSize="12px" color="white">
                        Sign In
                      </Text>
                    )}
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  border="none"
                  borderRadius="0px"
                  boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                >
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    <Box align="center">
                      {isAuth === false && !getItemSession("LoginUser") ? (
                        <Button
                          onClick={onOpen}
                          fontSize={{ base: "12px", md: "14px" }}
                          fontFamily="arial"
                          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                          colorScheme="#fff"
                          size="md"
                          p="5px 40px"
                        >
                          Login/siginup
                        </Button>
                      ) : (
                        <Button
                          onClick={handleLogout}
                          fontSize={{ base: "12px", md: "14px" }}
                          fontFamily="arial"
                          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                          colorScheme="#fff"
                          size="md"
                          p="5px 40px"
                        >
                          Logout
                        </Button>
                      )}
                      {!admin && (
                        <Modal
                          closeOnOverlayClick={false}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalCloseButton />
                            <ModalBody textAlign={"center"} pb={6}>
                              {!Registarion && (
                                <Flex mt={20} flexDirection={"column"} gap={2}>
                                  <Heading color={"#333"}>Login</Heading>
                                  <Input
                                    placeholder="User name..."
                                    name="email"
                                    onChange={handlechange}
                                  ></Input>
                                  <Input
                                    placeholder="Password..."
                                    type={"password"}
                                    name="password"
                                    onChange={handlechange}
                                  ></Input>
                                  <Button
                                    onClick={handleLogin}
                                    fontFamily="arial"
                                    background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                                    colorScheme="#fff"
                                    mr={3}
                                  >
                                    {/* {isLoading ? <Spinner /> : "Login"}{" "} */}
                                    Login
                                  </Button>
                                  <Link onClick={() => setRegistarion(true)}>
                                    Don't have an account?{" "}
                                    <span style={{ color: "blue" }}>
                                      Create your new account
                                    </span>
                                  </Link>
                                </Flex>
                              )}

                              {Registarion && (
                                <Flex flexDirection={"column"} gap={2}>
                                  <Heading color={"#333"}>Registration</Heading>
                                  <Input
                                    placeholder="First name..."
                                    name="firstname"
                                    onChange={handlechenge}
                                  ></Input>
                                  <Input
                                    placeholder="Last name..."
                                    name="lastname"
                                    onChange={handlechenge}
                                  ></Input>
                                  <Input
                                    placeholder="Email..."
                                    name="email"
                                    onChange={handlechenge}
                                  ></Input>
                                  <Input
                                    placeholder="Password..."
                                    name="password"
                                    type={"password"}
                                    onChange={handlechenge}
                                  ></Input>

                                  <Input
                                    placeholder="conform Password..."
                                    type={"password"}
                                    onChange={(e) => setConform(e.target.value)}
                                  ></Input>
                                  <p style={{ color: "red" }}>
                                    {cred.password !== undefined &&
                                    conform !== cred.password
                                      ? "password is not matching"
                                      : ""}
                                  </p>
                                  <Button
                                    onClick={handleRegister}
                                    fontFamily="arial"
                                    background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                                    colorScheme="#fff"
                                    mr={3}
                                  >
                                    {isLoading ? <Spinner /> : "Sign Up"}{" "}
                                  </Button>
                                  <Link
                                    onClick={() => setRegistarion(!Registarion)}
                                  >
                                    {" "}
                                    already have an account
                                  </Link>
                                </Flex>
                              )}
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      )}
                      <Text fontSize={{ base: "11px", md: "12px" }}>
                        New to TRADEMART{" "}
                        <span style={{ color: "blue" }}>Join Now</span>
                      </Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverBody>
                    <Box>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <AiOutlineHome fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Home
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <MdSendToMobile fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Post Your Requirement
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <ImUserCheck fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Verified
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <BiMessageDetail fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          My Orders
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <RiCustomerServiceFill fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Products/Services Directory
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <AiOutlineSetting fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Settings
                        </Text>
                      </Flex>
                      <Flex m={{ base: "5px 0px", md: "10px 0px" }} gap="5px">
                        <TiThSmall fontSize="20px" color="gray" />
                        <Text
                          display="flex"
                          fontSize={{ base: "12px", md: "14px" }}
                          cursor="pointer"
                          fontWeight="500"
                        >
                          Recent Activity
                        </Text>
                      </Flex>
                    </Box>
                  </PopoverBody>
                  <PopoverFooter>
                    <Box>
                      <Box p="10px 0px">
                        <Text
                          fontSize={{ base: "12px", md: "14px" }}
                          fontWeight="500"
                        >
                          Pay with TRADEMART
                        </Text>
                        <Text
                          fontSize={{ base: "12px", md: "14px" }}
                          color="gray"
                        >
                          Secure & hassle-free payments
                        </Text>
                      </Box>
                      <hr />
                      <Box p="10px 0px">
                        <Text
                          fontSize={{ base: "12px", md: "14px" }}
                          fontWeight="500"
                        >
                          Ship with TRADEMART
                        </Text>
                        <Text
                          fontSize={{ base: "12px", md: "14px" }}
                          color="gray"
                        >
                          Easy booking & transport
                        </Text>
                      </Box>
                      <hr />
                      <Box m="15px 0px">
                        <Text
                          fontSize={{ base: "12px", md: "14px" }}
                          fontWeight="500"
                          display="flex"
                        >
                          <BiMobile fontSize="20px" color="gray" /> Download APP
                        </Text>
                      </Box>
                      <hr />
                    </Box>
                    <Box align="center">
                      <Button
                        onClick={() => {
                          setAdmin(!admin);
                          // onOpen();
                          navigate("/admin");
                        }}
                        m="5px 0px"
                        fontSize={{ base: "12px", md: "14px" }}
                        fontFamily="arial"
                        background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                        colorScheme="#fff"
                        size="sm"
                      >
                        Admin Login
                      </Button>
                    </Box>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </Box>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              backgroundColor="#2E3192"
              color="white"
              fontSize={{ base: "20px", sm: "30px" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text cursor="pointer" fontSize="12px" color="white">
                Sign In
              </Text>
              <Text cursor="pointer" fontSize="12px" color="white">
                Message
              </Text>
              <Text cursor="pointer" fontSize="12px" color="white">
                Shopping
              </Text>
              <Text cursor="pointer" fontSize="12px" color="white">
                Help
              </Text>
              <Text cursor="pointer" fontSize="12px" color="white">
                Sell
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
