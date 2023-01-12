import styled from "styled-components";

import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { CircularProgress } from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationRules } from "../../../utils/Validation/validations";
import { SignupSchema } from "../../../utils/Validation/validationSchema";
import { createOrder } from "../../../utils/Api/apiCall";
import Image from "../../OtherComponents/Images/images";

const OrderDetails = ({
  isOpen,
  orderPrice,
  clearAll,
  copyOrderIngredient,
  handleClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [orderCreateStatus, setOrderCreateStatus] = useState(false);

  const handleOrder = async (data) => {
    const {
      name: orderName,
      phone: orderPhone,
      email: orderEmail,
      address: orderAddress,
    } = data;

    const orderData = {
      orderName,
      orderPhone,
      orderEmail,
      orderAddress,
      orderProducts: copyOrderIngredient,
      orderPrice,
    };

    try {
      setLoading(true);
      await createOrder(orderData);
      setLoading(false);
      setOrderCreateStatus(true);
      clearAll();
    } catch (error) {
      setLoading(false);
      console.error(error);
      setOrderCreateStatus(false);
      clearAll();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogContent>
        {orderCreateStatus ? (
          <OrderSuccess>
            {"Your order is accepted. Wait for the call."}
          </OrderSuccess>
        ) : (
          <>
            <ModalTitle>Order</ModalTitle>
            {Object.keys(copyOrderIngredient).map((product) => {
              return (
                <>
                  <OrderProduct>
                    <Image name={product} />
                    <span>{copyOrderIngredient[product]}</span>
                  </OrderProduct>
                </>
              );
            })}
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
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

                  <LabelStyled>
                    <FieldStyled
                      validate={validationRules.validateEmail}
                      type="email"
                      name="email"
                      placeholder={"email"}
                    />
                  </LabelStyled>
                  <ErrorMessage name="email" />

                  <LabelStyled>
                    <FieldStyled
                      validate={validationRules.validatePhone}
                      type="text"
                      name="phone"
                      placeholder={"phone"}
                    />
                  </LabelStyled>
                  <ErrorMessage name="phone" />

                  <LabelStyled>
                    <FieldStyled
                      validate={validationRules.validateAddress}
                      type="text"
                      name="address"
                      placeholder={"address"}
                    />
                  </LabelStyled>
                  <ErrorMessage name="address" />
                  <br />
                  <FinalPriceStyled>
                    <FinalPriceSpanStyled>
                      {"Total Price"}:
                    </FinalPriceSpanStyled>
                    <FinalPriceSpanStyled> $ {orderPrice}</FinalPriceSpanStyled>
                  </FinalPriceStyled>

                  <DialogActions>
                    {loading ? (
                      <CircularProgress color="success" />
                    ) : (
                      <>
                        <Button
                          style={{
                            height: 40,
                          }}
                          color="error"
                          onClick={handleClose}
                          variant="outlined"
                        >
                          {"cancel"}
                        </Button>
                        <Button
                          style={{
                            height: 40,
                          }}
                          color="success"
                          type="submit"
                          variant="outlined"
                        >
                          {"order"}
                        </Button>
                      </>
                    )}
                  </DialogActions>
                </FormStyled>
              )}
            </Formik>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const ModalTitle = styled.h2({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "36px",
  textAlign: "center",
});

const OrderProduct = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  margin: "5px 20px",
  padding: "5px",
  border: "5px double lightgrey",
});

const LabelStyled = styled.label({
  width: "95%",
  display: "flex",
  alignItems: "center",
});

const FieldStyled = styled(Field)({
  fontFamily: "Monsterrat Medium",
  height: "40px",
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

const FinalPriceStyled = styled.h2({
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
});

const FinalPriceSpanStyled = styled.span({
  display: "flex",
  alignItems: "center",
});

const OrderSuccess = styled.h3({
  textAlign: "center",
});

export default OrderDetails;
