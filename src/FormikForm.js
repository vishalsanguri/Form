import React from "react";
import { Formik, Form } from "formik";
import Text from "./coponent/FormikForm/Text";
import * as Yup from "yup";
import "./Formik.css";
export default function FormikForm() {
  const validate = Yup.object({
    firstname: Yup.string().max(15, "not exceed 15 character"),
    lastname: Yup.string().max(15, "not exceed 15 character"),
    email: Yup.string().email("email-invalid").required("required"),
    password: Yup.string().min(6, "atleast 6 characters").required("required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "not matched")
      .required("required"),
  });
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <>
            <div className="heading-top">SUN ENTERPRISE</div>
            <Form className="form-container">
              <Text label="First name" name="firstname" type="text" />
              <Text label="Last name" name="lastname" type="text" />
              <Text label="Email" name="email" type="email" />
              <Text label="Password" name="password" type="password" />
              <Text
                label="Re-Enter Password"
                name="confirmpassword"
                type="password"
              />
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  marginTop: "20px",
                }}
                type="submit"
              >
                Submit
              </button>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "20px",
                }}
                type="reset"
              >
                Reset
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
