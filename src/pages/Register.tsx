import React, { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Roboto";
  background: #eee;
  display: flex;
`;

const Title = styled.h1`
  margin: 0px;
  margin-bottom: 16px;
  font-size: 20px;
  color: black;
`;

const Paper = styled.div`
  width: 320px;
  background: white;
  border-radius: 4px;
  padding: 24px;
  margin: auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  margin-top: 4px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const ErrorText = styled.p`
  font-size: 11px;
  color: #e74c3c;
`;

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  username: Yup.string()
    .min(5, "Username is too short")
    .max(20, "Username is too long")
    .required("Username is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password is too short")
    .max(50, "Password is too long")
    .required("Password  is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password is not match")
    .required("Confirm Password is required")
});

type Props = {
  path: string;
};

const Register: FC<Props> = () => {
  const register = () => {};

  return (
    <Container>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Paper>
        <Title>Register</Title>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={RegisterSchema}
          onSubmit={register}
        >
          {({ touched, errors, values, handleChange, handleSubmit }) => (
            <>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <br />
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name && (
                  <ErrorText>{errors.name}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <br />
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && touched.username && (
                  <ErrorText>{errors.username}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <br />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <ErrorText>{errors.email}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <br />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <br />
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <ErrorText>{errors.confirmPassword}</ErrorText>
                )}
              </FormGroup>
              <Button label="Register" onClick={handleSubmit} />
            </>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Register;
