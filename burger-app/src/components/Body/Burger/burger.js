import styled from "styled-components";
import { useState } from "react";

import OrderDetails from "../../OtherComponents/OrderDeteils/orderDeteils";

const Burger = ({ ingredientAddingOrder, orderPrice, clearAll }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const orderIngredient = [...ingredientAddingOrder];

  const copyOrderIngredient = orderIngredient.reduce((allNames, name) => {
    const currNumber = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currNumber + 1,
    };
  }, {});

  return (
    <BurgerWrapper>
      <BurgerTitle>Burger price: {orderPrice} ₴</BurgerTitle>
      <UpPartBurger
        src={require("../../../Assets/images/top_bun.png")}
        alt="Top bun"
      />
      {!ingredientAddingOrder.length ? (
        <Paragraph>Please, start by adding products ...</Paragraph>
      ) : (
        ingredientAddingOrder.map((product, idx) => {
          return (
            <ProductIMG
              key={product + idx}
              src={require(`../../../Assets/images/products/${product}.png`)}
              alt={product}
              style={{
                bottom: 140 + idx * 10,
                zIndex: idx + 1,
              }}
            />
          );
        })
      )}
      <DownPartBurger
        src={require("../../../Assets/images//bottom_bun.png")}
        alt="Bottom bun"
      />
      <Checkout
        className="checkout"
        onClick={+orderPrice > 1 ? handleOpen : undefined}
      >
        Checkout
      </Checkout>
      <OrderDetails
        isOpen={open}
        orderPrice={orderPrice}
        handleClose={handleClose}
        copyOrderIngredient={copyOrderIngredient}
        clearAll={clearAll}
      />
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.section({
  position: "relative",
  backgroundColor: "white",
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
  alignItems: "center",
});

const BurgerTitle = styled.h2({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "36px",
  margin: "20px 0",
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
  margin: "20px auto 0 auto",
  position: "absolute",
  bottom: "30px",
});

const UpPartBurger = styled.img({
  top: 90,
  zIndex: "11",
  width: "250px",
});

const Paragraph = styled.p({
  zIndex: "1",
});

const ProductIMG = styled.img({
  position: "absolute",
  width: "250px",
});

const DownPartBurger = styled.img({
  position: "absolute",
  top: 220,
  width: "250px",
});

export default Burger;
