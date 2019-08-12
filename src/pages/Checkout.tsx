import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import uuid from "uuid/v4";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../components/Button";
import MiniCart from "../components/MiniCart";

const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  padding: 64px 0px;
  font-family: "Roboto";
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-family: "Roboto";
  color: #333;
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

const Select = styled.select`
  margin-top: 4px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: white;
`;

const TextArea = styled.textarea`
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

const FormColumn = styled.div`
  width: 55%;
`;

const ProductColumn = styled.div`
  width: 40%;
`;

const PriceLabel = styled.p`
  font-size: 18px;
  text-align: right;
  color: #bbb;
  margin-top: 32px;
  margin-bottom: 4px;
`;

const TotalPrice = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: right;
  color: #333;
  margin-top: 0px;
`;

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0
});

const CheckoutSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  province: Yup.string().required("Province is required"),
  city: Yup.string().required("City is required"),
  subdistrict: Yup.string().required("Subdistrict is required"),
  address: Yup.string().required("Address is required"),
  zipCode: Yup.string().required("Zip Code is required")
});

type Props = {
  path: string;
};

const Checkout: FC<Props> = () => {
  const [items, setItems] = useState(
    [...Array(3)].map(() => ({
      id: uuid(),
      image: "https://via.placeholder.com/200x200?text=Dummy",
      name: "iPhone X 64GB - Elegant Black",
      price: 12000000,
      href: "/",
      quantity: 1
    }))
  );

  const [provinces, setProvinces] = useState([
    {
      id: uuid(),
      name: "Jawa Timur"
    }
  ]);

  const [cities, setCities] = useState([
    {
      id: uuid(),
      province_id: uuid(),
      name: "Sidoarjo"
    }
  ]);

  const [subdistricts, setSubdistricts] = useState([
    {
      id: uuid(),
      city_id: uuid(),
      name: "Candi"
    }
  ]);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const checkout = () => {};

  return (
    <div>
      <Helmet>
        <title>Gearmine | #1 Gadget Shop</title>
      </Helmet>
      <Wrapper>
        <Title>Checkout</Title>
        <Section>
          <FormColumn>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                province: "",
                city: "",
                subdistrict: "",
                address: "",
                zipCode: "",
                note: ""
              }}
              validationSchema={CheckoutSchema}
              onSubmit={checkout}
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
                    <Label htmlFor="phone">Phone</Label>
                    <br />
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && touched.phone && (
                      <ErrorText>{errors.phone}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="province">Province</Label>
                    <br />
                    <Select
                      id="province"
                      name="province"
                      value={values.province}
                      onChange={handleChange}
                    >
                      {provinces.map(item => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                    </Select>
                    {errors.province && touched.province && (
                      <ErrorText>{errors.province}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="city">City</Label>
                    <br />
                    <Select
                      id="city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    >
                      {cities.map(item => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                    </Select>
                    {errors.city && touched.city && (
                      <ErrorText>{errors.city}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="subdistrict">Subdistrict</Label>
                    <br />
                    <Select
                      id="subdistrict"
                      name="subdistrict"
                      value={values.subdistrict}
                      onChange={handleChange}
                    >
                      {subdistricts.map(item => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                    </Select>
                    {errors.subdistrict && touched.subdistrict && (
                      <ErrorText>{errors.subdistrict}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="address">Address</Label>
                    <br />
                    <TextArea
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && touched.address && (
                      <ErrorText>{errors.address}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <br />
                    <Input
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      value={values.zipCode}
                      onChange={handleChange}
                    />
                    {errors.zipCode && touched.zipCode && (
                      <ErrorText>{errors.zipCode}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="note">Note</Label>
                    <br />
                    <TextArea
                      id="note"
                      name="note"
                      value={values.note}
                      onChange={handleChange}
                    />
                    {errors.note && touched.note && (
                      <ErrorText>{errors.note}</ErrorText>
                    )}
                  </FormGroup>
                  <Button label="Checkout" onClick={handleSubmit} />
                </>
              )}
            </Formik>
          </FormColumn>
          <ProductColumn>
            {items.map(item => (
              <MiniCart key={item.id} {...item} />
            ))}
            <PriceLabel>Total Price</PriceLabel>
            <TotalPrice>{formatIDR.format(totalPrice)}</TotalPrice>
          </ProductColumn>
        </Section>
      </Wrapper>
    </div>
  );
};

export default Checkout;
