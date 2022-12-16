import styled from "styled-components";
import PriceOneElem from "./OnePrice/priceOneElem";

const Price = ({ allPrices }) => {
  return (
    <PricesStyled>
      <PriceTitle>Our Prices</PriceTitle>
      <div>
        {allPrices.map((price, index) => {
          const { name: ingredientName, price: ingredientPrice } = price;
          return (
            <PriceOneElem
              key={ingredientName + index}
              oneElemName={ingredientName}
              oneElemPrice={ingredientPrice}
            />
          );
        })}
      </div>
    </PricesStyled>
  );
};

const PricesStyled = styled.div({
  height: "100%",
  flexBasis: "25%",
  textAlign: "center",
  backgroundColor: "rgba(97, 67, 217, 0.766)",
  borderRadius: "50px",
  padding: "7% 0",
});
const PriceTitle = styled.h2({
  marginBottom: "30px",
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "36px",
});

export default Price;
