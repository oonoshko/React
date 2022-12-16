import styled from "styled-components";

const Burger = ({ totalPrice }) => {
  return (
    <BurgerWrapper>
      <BurgerTitle>Burger price: {totalPrice} ₴</BurgerTitle>
      <Checkout>Checkout</Checkout>
      <UpPart></UpPart>
      <p>Please, start by adding products ...</p>
      <DownPart></DownPart>
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.section({
  backgroundColor: "rgba(97, 67, 217, 0.766)",
  flexBasis: "50%",
  textAlign: "center",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "24px",
  borderRadius: "50px",
  height: "475px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
});
const BurgerTitle = styled.h2({
  fontWeight: "600",
  fontSize: "36px",
  marginTop: "40px",
});

const Checkout = styled.button({
  fontFamily: "Inter",
  fontSize: "16px",
  backgroundColor: "black",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  color: "white",
  cursor: "pointer",
  margin: "25px 0",
});
const UpPart = styled.p({
  backgroundColor: "rgb(255, 153, 0)",
  padding: "60px 0 0 0 ",
  borderRadius: "50px 50px 0 0",
  marginBottom: "10px",
});
const DownPart = styled.p({
  backgroundColor: "orange",
  padding: "25px 0 0 0 ",
  marginTop: "10px",
});

export default Burger;
