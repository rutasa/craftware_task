import styled from "styled-components";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Tooltip from "./Tooltip";

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
        validateOnBlur={false}
        validateOnChange={formSubmitted}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .matches(/\b[a-zA-Z]+\s[a-zA-Z]+\b/, "Please check your full name")
            .required("Required"),
          mobileNumber: Yup.string()
            .matches(/^(86)([0-9]{7})$/, "Please check your phone number")
            .required("Required"),
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
                autoComplete="off"
                errorpresent={formSubmitted && !!errors.fullName ? 1 : 0}
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
                autoComplete="off"
                errorpresent={formSubmitted && !!errors.mobileNumber ? 1 : 0}
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
                autoComplete="off"
                errorpresent={formSubmitted && !!errors.email ? 1 : 0}
              />
              <ErrorMessage name="email" render={msg => <Error>{msg}</Error>} />
            </FieldContainer>
            <CheckboxContainer>
              <Field name="terms" type="checkbox" />
              <CheckboxLabelWrapper>
                <CheckboxLabel htmlFor="terms">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </CheckboxLabel>
                <StyledTooltip content="More tooltip content" />
              </CheckboxLabelWrapper>
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
  padding: 5px;
  outline: none;
  border: 1px solid lightgrey;
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
  display: inline;
`;

const CheckboxLabelWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledTooltip = styled(Tooltip)`
  position: absolute;
  right: 15px;
  bottom: 9px;
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
