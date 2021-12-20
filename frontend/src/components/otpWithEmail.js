import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import "../styles/login.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react"

const OtpWithEmail = () => {
  const [status,setStatus]=useState()
  const [err,setErr]=useState()
  const typestring = sessionStorage.getItem('type');
  const userType = JSON.parse(typestring);
  const errsetter=(err)=>{
    setErr(err)
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Required"),
      otp: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const formData=new FormData()
      formData.append('email',values.email)
      formData.append('email_otp',values.otp)
      fetch("http://127.0.0.1:8000/accounts/verify-email/",{
            method:'POST',
            body:formData,
        }).then(res=>res.json().then(json=>setStatus(json)))
        .catch(err=>errsetter(err))
    },
  });
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="loginDiv-headings ">verify OTP</Typography>
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
          <Typography className="loginDiv-text ">otp</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            className="styledInput"
            id="otp"
            name="otp"
            type="otp"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.otp}
          />
          {formik.touched.otp && formik.errors.otp ? (
            <p className="error">{formik.errors.otp}</p>
          ) : null}
        </Grid>
        {err?<p className="error">You have entered wrong crednetials</p>:<p></p>}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            className="styledButton"
            onClick={formik.handleSubmit}
          >
            Submit
            {/* <Link to="">Login</Link> */}
          </Button>
          {status?userType==="company"?<Navigate to='/home'/>:<Navigate to="/manufacturer/about"/>:<h6></h6>}
        
        </Grid>
      </Grid>
    </div>
  );
};

export default OtpWithEmail;
