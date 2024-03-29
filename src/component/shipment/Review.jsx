import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/Cart/cart.action";

let details;
// JSON.parse(localStorage.getItem("details")) || {};
let cardDetails;
// = JSON.parse(localStorage.getItem("cardDetails")) || {};
let totalPrice = 0;

export default function Review() {
  const products = useSelector((store) => store.cart.data);
  const cartTotal = useSelector((store) => store.cart.cartTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    totalPrice = localStorage.getItem("totalPrice") || 0;
    details = JSON.parse(localStorage.getItem("details")) || {};
    cardDetails = JSON.parse(localStorage.getItem("cardDetails")) || {};
  }, []);

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: cardDetails?.name },
    {
      name: "Card number",
      detail: `xxxx-xxxx-xxxx-${cardDetails?.card.slice(-4)}`,
    },
    { name: "Expiry date", detail: `${cardDetails?.date}` },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products?.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">₹ {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹ {cartTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {details?.fname} {details?.lname}
          </Typography>
          <Typography gutterBottom>
            {details?.address},{details?.city},{details?.state}, {details?.code}
            , {details?.country}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
