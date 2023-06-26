import React from "react";
import { Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { calculateTotal, getCartItems } from "../redux/Cart/cart.action";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/Cart/cart.action";
import { handleQuantityChange } from "../redux/Cart/cart.action";
import Navbar from "../component/Navbar";
import EmptyCart from "../component/EmptyCart";
import Footer from "../component/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.data);
  const cartTotal = useSelector((store) => store.cart.cartTotal);

  const navigate = useNavigate();

  const handleShipping = () => {
    navigate("/address");
  };

  React.useEffect(() => {
    dispatch(calculateTotal(cartData));
  }, [cartData]);

  React.useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Navbar />

      {cartData.length > 0 ? (
        <Box
          display={isLargerThan900 ? "flex" : ""}
          width={{ base: "100%", md: "90%", "2xl": "70%" }}
          margin={"auto"}
          justifyContent="space-between"
          my={"140px"}
        >
          <Box width={{ base: "100%", lg: "60%" }}>
            <Text as="b" fontSize={"2xl"}>
              My Bag ({cartData.length} items){" "}
            </Text>
            <Box>
              {cartData.map((elem) => {
                return (
                  <Box
                    key={elem.id}
                    fontSize={"xs"}
                    display={"flex"}
                    justifyContent="space-between"
                    border={"1px solid gray"}
                    marginTop="5"
                    height={"auto"}
                  >
                    <Image src={elem.poster} height={"216"} alt={elem.name} />
                    <Box width={"300px"}>
                      <Box mt={"5px"}>
                        <Text fontSize={"lg"} fontWeight={"600"}>
                          {" "}
                          {elem.title}
                        </Text>

                        <Text fontSize={"md"}> Color: {elem.color}</Text>
                        <Text fontSize={"md"}> Size: {elem.size}</Text>
                      </Box>
                      <Box
                        pb={"5px"}
                        display="flex"
                        justifyContent={"center"}
                        margin="1"
                      >
                        <Button
                          size="sm"
                          onClick={() =>
                            dispatch(handleQuantityChange(elem, -1))
                          }
                          isDisabled={elem.orderedQuantity === 1}
                        >
                          -
                        </Button>
                        <Text
                          as="b"
                          marginLeft={"1rem"}
                          marginRight="1rem"
                          alignSelf={"center"}
                        >
                          {elem.orderedQuantity}
                        </Text>
                        <Button
                          size="sm"
                          onClick={() =>
                            dispatch(handleQuantityChange(elem, 1))
                          }
                        >
                          +
                        </Button>
                      </Box>
                      <Box display={"flex"} flexDirection="column" pb={"5px"}>
                        <Box>
                          <Box
                            bg="blue.400"
                            width={"fit-content"}
                            paddingRight="10px"
                            display="flex"
                            margin={"auto"}
                          >
                            <Box
                              height={"100%"}
                              width="10px"
                              bg={"blue.900"}
                              marginRight="20px"
                            >
                              {"."}{" "}
                            </Box>
                            <Text as="b" pb={"5px"}>
                              Rs. {elem.price}.00
                            </Text>
                          </Box>
                        </Box>
                        <Button
                          alignSelf={"center"}
                          size="sm"
                          marginTop={"1"}
                          onClick={() => dispatch(deleteFromCart(elem))}
                          mt="5px"
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box width={isLargerThan900 ? "25%" : "90%"}>
            <Box bg="#fafafa" height={"fit-content"} margin="auto">
              <Box
                marginLeft={"3"}
                marginRight="3"
                marginBottom={"10px"}
                display="flex"
                alignItems={"left"}
              >
                <Text as="b">Order Details</Text>
              </Box>
              <Box>
                <Box>
                  <Box
                    marginLeft={"3"}
                    marginRight="3"
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Text>Cart Total</Text>
                    <Text>₹{cartTotal}</Text>
                  </Box>

                  <Box
                    marginLeft={"3"}
                    marginRight="3"
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Text>Delivery Fee</Text>
                    <Text textDecoration={"line-through"}>₹99.00</Text>
                  </Box>
                  <Box
                    marginLeft={"3"}
                    marginRight="3"
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Text as="b">Order Total</Text>
                    <Text as="b">₹{cartTotal}.00</Text>
                  </Box>
                  <Button
                    width={"100%"}
                    borderRadius="0"
                    marginTop={"5"}
                    bg="#D5A249"
                    _hover={{ bg: "#4299e1", color: " black" }}
                    color="white"
                    onClick={handleShipping}
                  >
                    PROCEED TO SHIPPING
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
