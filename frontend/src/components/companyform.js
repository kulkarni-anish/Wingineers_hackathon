import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "../styles/company.scss";
import { BrowserRouter as Router, Link, Navigate, Route } from "react-router-dom";

const Company = ({ email }) => {
  const [data,setData]=useState()
  const items = [
    "CompanyName",
    "CompanyType",
    "Address",
    "City",
    "State",
    "Pincode",
    "Country",
  ];
  const formik = useFormik({
    
    initialValues: {
      CompanyName: "",
      CompanyType: "",
      ProductsRequired: "",
      Address: "",
      City: "",
      State: "",
      Pincode: "",
      Country: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
      console.log(email);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("company_name", values.CompanyName);
      formData.append("company_type", values.CompanyType);
      formData.append("address_main", values.Address);
      formData.append("zip_code", values.Pincode);
      formData.append("counrty", values.Country);
      formData.append("state", values.State);
      formData.append("city", values.City);
      fetch("http://127.0.0.1:8000/clients/company/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json().then((json) => console.log(json)))
        .catch((err) => console.log(err.json()));
    },
  });
  return (
    <div className="company">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="company-headings ">
            Company Registeration
          </Typography>
        </Grid>
        {items.map((item) => (
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography className="company-text ">{item}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <input
                className="styledForm"
                id={item}
                name={item}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.item}
              />
              {formik.touched.item && formik.errors.item ? (
                <p className="error">{formik.errors.item}</p>
              ) : null}
            </Grid>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="styledButton"
            onClick={formik.handleSubmit}
          >
            Register
          </Button>
          {data?<Navigate to='/login'/>:<p></p>}

        </Grid>
      </Grid>
    </div>
  );
};

export default Company;
