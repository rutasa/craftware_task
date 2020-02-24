import styled from "styled-components";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function YourDetails() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  return (
    <>
      <YourDetailsHeader>Your details</YourDetailsHeader>
      <Formik
        initialValues={{
          fullName: "",
          mobileNumber: "",
          email: "",
          terms: false
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().matches(/\b[a-zA-Z]+\s[a-zA-Z]+\b/, 'Please check your full name').required("Required"),
          mobileNumber: Yup.string().matches(/^(86)([0-9]{7})$/, 'Please check your phone number').required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.bool().oneOf([true], "Please tick the checkbox")
        })}
      >
        {({ errors }) => (
          <Form>
            <FieldContainer>
              <Label htmlFor="fullName">Full Name</Label>
              <StyledField
                name="fullName"
                type="text"
                errorpresent={formSubmitted ? !!errors.fullName : undefined}
              />
              <ErrorMessage
                name="fullName"
                render={msg => <Error>{msg}</Error>}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <StyledField
                name="mobileNumber"
                type="tel"
                errorpresent={formSubmitted ? !!errors.mobileNumber : undefined}
              />
              <ErrorMessage
                name="mobileNumber"
                render={msg => <Error>{msg}</Error>}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="email">Email</Label>
              <StyledField
                name="email"
                type="email"
                errorpresent={formSubmitted ? !!errors.email : undefined}
              />
              <ErrorMessage name="email" render={msg => <Error>{msg}</Error>} />
            </FieldContainer>
            <CheckboxContainer>
              <Field name="terms" type="checkbox" />
              <CheckboxLabel htmlFor="terms">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </CheckboxLabel>
            </CheckboxContainer>
              <ErrorMessage name="terms" render={msg => <Error>{msg}</Error>} />
            <Button type="submit" onClick={() => setFormSubmitted(true)}>
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

const YourDetailsHeader = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #676f7e;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const StyledField = styled(Field)`
  border-radius: 1rem;
  ${p => p.errorpresent && "background-color: #F2DEDF !important; }"}
`;

const Error = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-top: 10px;
  margin-bottom: 0;
`;

const CheckboxLabel = styled.label`
  font-size: 0.7rem;
  padding-left: 10px;
`;

const Button = styled.button`
  border-radius: 1rem;
  font-weight: 600;
  width: 100%;
  background-color: #f66000;
  border-color: #f66000;
  color: #ffffff;
  margin-bottom: 40px;
  margin-top: 20px;
`;
