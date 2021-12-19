import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../styles/loginWith.scss";
const LoginWith = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="loginDiv-headings ">LOGIN</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="loginDiv-text ">Email</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            className="styledInput"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="loginDiv-text ">Password</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            className="styledInput"
            id="password"
            name="password"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="styledButton"
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </Grid>

        <Grid item xs={12}>
          <div className="styledRegister">
            <p>Or</p>
            <Typography variant="contained">
              <Link to="/Register">Register</Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginWith;
