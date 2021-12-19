import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/productForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      num: "",
      price: "",
      date: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      desc: Yup.string().required("Required"),
      num: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  return (
    <div className="productDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="productDiv-text1">
            Enter product info:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="productDiv-text2">Product Name</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            className="productDiv-form"
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="productDiv-text2">Description</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            type="text"
            className="productDiv-form"
            id="desc"
            name="desc"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.desc}
            className="productDiv-form"
          ></input>
          {formik.touched.desc && formik.errors.desc ? (
            <p className="error">{formik.errors.desc}</p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="productDiv-text2">Dispersion Date</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            className="productDiv-form"
            id="date"
            name="date"
            type="date"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date ? (
            <p className="error">{formik.errors.date}</p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="productDiv-text2">Stock</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            type="text"
            className="productDiv-form"
            id="num"
            name="num"
            type="num"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.num}
          />
          {formik.touched.num && formik.errors.num ? (
            <p className="error">{formik.errors.num}</p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="productDiv-text2">Price</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            type="text"
            className="productDiv-form"
            id="price"
            name="price"
            type="price"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <p className="error">{formik.errors.price}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            onClick={formik.handleSubmit}
            className="productDiv-button"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductForm;
