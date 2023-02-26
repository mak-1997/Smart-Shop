import React from "react";
import { Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { calculateTotal, getCartItems } from "../redux/Cart/cart.action";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/Cart/cart.action";
import { handleQuantityChange } from "../redux/Cart/cart.action";
import Navbar from "../component/Navbar";

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
      <Box
        display={isLargerThan900 ? "flex" : ""}
        width={{ base: "100%", md: "90%", "2xl": "70%" }}
        margin={"auto"}
        marginTop={"80px"}
        justifyContent="space-between"
        marginBottom={"5"}
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
                >
                  <Image src={elem.poster} height={"200px"} alt={elem.name} />
                  <Box width={"300px"}>
                    <Box>
                      <Text> {elem.title}</Text>

                      <Text> Color: {elem.color}</Text>
                      <Text> Size: {elem.size}</Text>
                    </Box>
                    <Box display="flex" justifyContent={"center"} margin="1">
                      <Button
                        size="sm"
                        onClick={() => dispatch(handleQuantityChange(elem, -1))}
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
                        onClick={() => dispatch(handleQuantityChange(elem, 1))}
                      >
                        +
                      </Button>
                    </Box>
                    <Box display={"flex"} flexDirection="column">
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
                          <Text as="b">Rs. {elem.price}.00</Text>
                        </Box>
                      </Box>
                      <Button
                        alignSelf={"center"}
                        size="sm"
                        marginTop={"1"}
                        onClick={() => dispatch(deleteFromCart(elem))}
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
    </>
  );
};

export default Cart;
