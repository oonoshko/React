import styled from "styled-components";
import Image from "../Images/images";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationRules } from "../../../utils/Validation/validations";
import { SignupSchema } from "../../../utils/Validation/validationSchema";
import { createOrder } from "../../../utils/Api/apiCall";
import { Button, Stack } from "@mui/material";
import Loader from "../Loader/loader";

const style = {
  backgroundColor: "Black",
  display: "flex",
  justifyContent: "center",
  width: "160px",
  height: "50px",
};

const OrderDetails = ({ quantities, totalPrice, clearBurger }) => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [orderCreateStatus, setOrderCreateStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const burgerComponents = Object.entries(quantities).filter((el) => el[1]);

  const orderWindowClesed = () => {
    setErrorStatus(false);
    setOrderCreateStatus(false);
  };
  const handleOrder = async (data) => {
    const {
      name: orderName,
      phone: orderPhone,
      email: orderEmail,
      address: orderAddress,
    } = data;
    const orderData = {
      orderName,
      orderPhone: orderPhone,
      orderEmail: orderEmail,
      orderFast: checked,
      orderAddress: orderAddress,
      orderProducts: Object.fromEntries(burgerComponents),
      orderPrice: totalPrice,
    };

    try {
      setLoading(true);
      await createOrder(orderData);
      console.log(orderData);
      setOrderCreateStatus(true);
      clearBurger();
      setErrorStatus(false);
      setLoading(false);
    } catch (error) {
      setErrorStatus(true);
      setLoading(false);
      console.error(error);
      setOrderCreateStatus(false);
    }
  };

  return (
    <WrapperStyled>
      {orderCreateStatus ? (
        <>
          {loading ? (
            <Loader />
          ) : (
            <StatusBox>
              <TittleStyled>Order success!</TittleStyled>
              <Button onClick={orderWindowClesed} style={style}>
                Ok
              </Button>
            </StatusBox>
          )}
        </>
      ) : (
        <>
          {errorStatus ? (
            <TittleStyled>Something went wrong!</TittleStyled>
          ) : undefined}

          <TittleStyled>Burger price: {totalPrice} ₴ </TittleStyled>
          <OrderListStyled>
            {burgerComponents.map((element) => {
              return (
                <OrderItemStyled
                  key={element[0] + "_Order_Item"}
                  name={element[0]}
                >
                  <Image name={element[0]} />
                  <OrderSpan>{element[0] + ":"}</OrderSpan>
                  <OrderSpan>{element[1]}</OrderSpan>
                </OrderItemStyled>
              );
            })}
          </OrderListStyled>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              address: "",
              isFast: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => handleOrder(values)}
          >
            {({ isSubmitting }) => (
              <FormStyled>
                <LabelStyled>
                  <FieldStyled
                    validate={validationRules.validateName}
                    type="text"
                    name="name"
                    placeholder={"name"}
                  />
                </LabelStyled>
                <ErrorMessage name="name" />
                <br />

                <LabelStyled>
                  <FieldStyled
                    validate={validationRules.validateEmail}
                    type="email"
                    name="email"
                    placeholder={"email"}
                  />
                </LabelStyled>
                <ErrorMessage name="email" />
                <br />
                <LabelStyled>
                  <FieldStyled
                    validate={validationRules.validatePhone}
                    type="text"
                    name="phone"
                    placeholder={"phone"}
                  />
                </LabelStyled>
                <ErrorMessage name="phone" />
                <br />
                <LabelStyled>
                  <FieldStyled
                    validate={validationRules.validateAddress}
                    type="text"
                    name="address"
                    placeholder="address"
                  />
                </LabelStyled>
                <ErrorMessage name="address" />
                <br />
                <br />
                <Stack direction="row" spacing={2}>
                  <Button style={style} variant="contained" type="submit">
                    Order
                  </Button>
                  <Button
                    style={style}
                    variant="contained"
                    onClick={orderWindowClesed}
                  >
                    Cancel
                  </Button>
                </Stack>
              </FormStyled>
            )}
          </Formik>
        </>
      )}
    </WrapperStyled>
  );
};
const StatusBox = styled.div({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const WrapperStyled = styled.div({
  width: "400px",

  background: "#fff",
  margin: "10px 20px 20px",
});
const TittleStyled = styled.h3({
  color: "#FF6B0B",
  margin: "5px",
});
const OrderListStyled = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: "5px",
});
const OrderItemStyled = styled.li({
  padding: "5px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #aaa",
  alignItems: "center",
});

const LabelStyled = styled.label({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const FieldStyled = styled(Field)({
  fontFamily: "Monsterrat Medium",
  height: "50px",
  border: "none",
  borderBottom: "2px solid lightgrey",
  textIndent: "10px",
  width: "100%",
});

const FormStyled = styled(Form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const OrderSpan = styled.span({});
export default OrderDetails;
