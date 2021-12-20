import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import "../styles/login.scss";
const OtpWithphone = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      otp: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be exactly 14 digits")
        .required("Required"),
      otp: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const initialNum=91
      const newPhone="+"+initialNum.toString()+values.phone
      console.log(newPhone)
      const formData =new FormData()
      formData.append('phone_number',newPhone)
      formData.append('phone_otp',values.otp)
      fetch("http://127.0.0.1:8000/accounts/verify-otp/",{
            method:'POST',
            body:formData,
        }).then(res=>res.json().then(json=>console.log(json)))
        .catch(err=>console.log(err))
    },
  });
  return (
    <div className="loginDiv">
      <Grid container>
        <Grid item xs={12}>
          <Typography className="loginDiv-headings ">verify OTP</Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography className="loginDiv-text ">phone</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <input
            className="styledInput"
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="error">{formik.errors.phone}</p>
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
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.otp}
          />
          {formik.touched.otp && formik.errors.otp ? (
            <p className="error">{formik.errors.otp}</p>
          ) : null}
        </Grid>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default OtpWithphone;
