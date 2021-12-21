import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/product.scss";
import {  useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

import * as Yup from "yup";
const OrderDetails = ({cards}) => {
  const [data,setData]=useState()
  const tokenString = sessionStorage.getItem('email');
  const userEmail = JSON.parse(tokenString);
  console.log(userEmail)
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()

        .required("Required"),
      quantity: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      const formData = new FormData();
      formData.append("email",userEmail)
      formData.append("quantity", values.quantity);
      formData.append("product_name",cards.name );
      fetch("http://127.0.0.1:8000/clients/orderview/", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json().then(json =>console.log(json)))
        .catch((err) => console.log( err));
    },
  });
  return (
    <div className="productDetails">
      <Grid container className="productDetails-container">
        <Grid item xs={12}>
          <Typography className="productDetails-headings bold">
            YOUR ORDER:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">PRODUCT</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">
            QUANTITY
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"
          id="quantity"
          name="quantity"
          type="quantity"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <p className="error">{formik.errors.quantity}</p>
        ) : null}
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">COLOR</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">CONTACT</Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={4}>
          <Typography className="productDetails-black bold">
            DELIVERY ADDRESS
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <input className="styledInput1"></input>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" className="divButton"
          onClick={formik.handleSubmit}
          type="submit"
          >
          PLACE ORDER 
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
