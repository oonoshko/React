import styled from "styled-components";

const Burger = ({ ingredientAddingOrder, totalPrice }) => {
  return (
    <BurgerWrapper>
      <BurgerTitle>Burger price: {totalPrice} ₴</BurgerTitle>
      <Checkout className="checkout">Checkout</Checkout>
      <UpPartBurger
        src={require("../../../Assets/images/top_bun.png")}
        alt="Top bun"
      />
      {!ingredientAddingOrder.length && (
        <Paragraph>Please, start by adding products ...</Paragraph>
      )}
      {ingredientAddingOrder.map((product, idx) => {
        return (
          <ProductIMG
            key={product + idx}
            src={require(`../../../Assets/images/products/${product}.png`)}
            alt={product}
            style={{
              bottom: 95 + idx * 9,
              zIndex: idx + 1,
            }}
          />
        );
      })}
      <DownPartBurger
        src={require("../../../Assets/images//bottom_bun.png")}
        alt="Bottom bun"
      />
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.section({
  position: "relative",
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
  display: "flex",
  flexDirection: "column",
});
const BurgerTitle = styled.h2({
  fontWeight: "600",
  fontSize: "36px",
  marginTop: "20px",
});

const Checkout = styled.button({
  width: "200px",
  fontFamily: "Inter",
  fontSize: "16px",
  backgroundColor: "black",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  color: "white",
  cursor: "pointer",
  margin: "20px auto",
});

const UpPartBurger = styled.img({
  top: 0,
  zIndex: "11",
  width: "250px",
  margin: "0 auto",
});

const Paragraph = styled.p({
  zIndex: "1",
  margin: "0 auto",
});

const ProductIMG = styled.img({
  position: "absolute",
  left: 160,
  width: "250px",
  margin: "0 auto",
});

const DownPartBurger = styled.img({
  position: "absolute",
  bottom: 50,
  left: 160,
  width: "250px",
  margin: "0 auto",
});

export default Burger;
