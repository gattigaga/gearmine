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

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password  is required")
});

type Props = {
  path: string;
};

const Login: FC<Props> = () => {
  const login = () => {};

  return (
    <Container>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Paper>
        <Title>Login</Title>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
          onSubmit={login}
        >
          {({ touched, errors, values, handleChange, handleSubmit }) => (
            <>
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
              <Button label="Login" onClick={handleSubmit} />
            </>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
