import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Products/products.action";
import ProductCards from "../component/ProductCards";





const MensClothing = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.data);

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Box display={'flex'} >
      <Grid templateColumns={"repeat(4,1fr)"} gap="5" maxWidth={"80%"}>
        {products.map((elem) => (
          <ProductCards key={elem.id} {...elem} />
        ))}
      </Grid>
    </Box>
  );
};

export default MensClothing;
