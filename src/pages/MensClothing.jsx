import React from "react";
import { Box, Text, Grid, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getFilteredAndPaginatedData } from "../redux/Products/products.action";
import ProductCards from "../component/ProductCards";
import SidebarLarge from "../component/SidebarLarge";
import Loading from "./Loading";
import Footer from "../component/Footer";
import { setPage } from "../redux/Products/products.action";

const MensClothing = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.data);
  const cat = useSelector((store) => store.products.cat);
  const price = useSelector((store) => store.products.price);
  const order = useSelector((store) => store.products.order);
  const page = useSelector((store) => store.products.page);
  

  const handlePageChange = (value) => {
    dispatch(setPage(page + value));
  };
  
  React.useEffect(() => {
    dispatch(getFilteredAndPaginatedData(cat,price,order,page));
    // dispatch(getData(page));
  }, [cat,price,order,page]);



  if (products.isLoading) return <Loading />;

  return (
    <Box>
      <Box
        width="100%"
        position="fixed"
        top="55px"
        display={"flex"}
        justifyContent="space-between"
        bg="#F7FAFC"
        paddingLeft={"5"}
        paddingRight="5"
        zIndex={'1000'}
      >
        <SidebarLarge page={page} />
        <Box display={"flex"}>
          <Button isDisabled={page === 1} size={"sm"} onClick={() => handlePageChange(-1)}>
            Prev
          </Button>
          <Box width={"2rem"} align={'center'}  >
            <Text as="b"  > {page} </Text>
          </Box>
          <Button size={"sm"} onClick={() => handlePageChange(1)}>
            Next
          </Button>
        </Box>
      </Box>
      <Box
        // display={{ lg: "flex" }}
        maxWidth={{ base: "100%", lg: "90%", "2xl": "80%" }}
        margin="auto"
      >
        <Box margin={"auto"} marginTop="100px" width={"fit-content"}>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
              "2xl": "repeat(5,1fr)",
            }}
            gap={{ base: "10", xl: "5" }}
            maxWidth={"100%"}
          >
            {products.map((elem) => (
              <ProductCards key={elem.id} {...elem} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MensClothing;
