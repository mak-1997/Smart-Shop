import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Products/products.action";
import ProductCards from "../component/ProductCards";
import SidebarLarge from "../component/SidebarLarge";

const MensClothing = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.data);

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Box display={{lg:"flex"}} maxWidth={{lg: "100%","2xl":"90%"}} justifyContent="center" >
      <SidebarLarge />
      <Box  width={'fit-content'} marginLeft={"auto"} marginRight={{base:"auto",lg:"0"}} marginTop="80px" >
        <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",xl:"repeat(4,1fr)","2xl":"repeat(5,1fr)"}} gap={{base:"10" ,xl:"5"}} maxWidth={"100%"}>
          {products.map((elem) => (
            <ProductCards key={elem.id} {...elem} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MensClothing;
