import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import { useState } from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Company from "./companyform";
import Manufacturer from "./manufactureform";
import "../styles/loginWith.scss";
// import "../styles/register.scss";
const Register = () => {
  const [type,setType]=useState()
  const [user,setUser]=useState()
  const [email,setEmail]=useState()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      setPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .max(10, "Exceeded maximum charecter length of 10"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      setPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16"),
      confirmPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16")
        .oneOf([Yup.ref("setPassword"), null], "password does not match"),
      name: Yup.string()
        .required("Required")
        .max(10, "Exceeded maximum charecter length of 10"),
    }),
    onSubmit: (values) => {
      const formData=new FormData()
      formData.append('email',values.email)
      formData.append('password',values.setPassword)
      formData.append('password2',values.confirmPassword)
      formData.append('phone_number',values.name)
      formData.append('type',values.type)
      fetch("http://127.0.0.1:8000/accounts/register/",{
            method:'POST',
            body:formData,
        }).then(res=>res.json().then(json=>setUser(json)))
        .catch(err=>console.log(err))
    },
  });
  return (
    <div>
      {user?
    <div>{user.type=="company"?
    <Company email={user.email} />
    :<Manufacturer email={user.email} />}</div>
    :<div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="loginDiv-headings">Register</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="loginDiv-text ">Phone Number</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput "
            id="name"
            name="name"
            type="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography className="loginDiv-text ">Email</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput "
            id="email"
            name="email"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography className="loginDiv-text">Set Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput"
            id="setPassword"
            name="setPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.setPassword}
          />
          {formik.touched.setPassword && formik.errors.setPassword ? (
            <p className="error">{formik.errors.setPassword}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography className="loginDiv-text">Confirm Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput "
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="error">{formik.errors.confirmPassword}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Typography className="loginDiv-text">Type</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className="styledInput "
            id="type"
            name="type"
            type="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.type}
          />
          {formik.touched.type && formik.errors.type ? (
            <p className="error">{formik.errors.type}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className="styledButton"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>}
    </div>
  );
};

export default Register;
