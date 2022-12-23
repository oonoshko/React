import styled from "styled-components";
import Loader from "../Loader/loader";
import ElementPrice from "./OnePrice/elementPrice";

const Price = ({ prices, loading }) => {
  return (
    <Prices>
      <PriceTitle>Our Prices</PriceTitle>
      <div>
        {loading && <Loader />}
        {!loading && (
          <>
            {prices.map((price, index) => {
              const { name: ingredientName, price: ingredientPrice } = price;
              return (
                <ElementPrice
                  key={ingredientName + index}
                  elemName={ingredientName}
                  elemPrice={ingredientPrice}
                />
              );
            })}
          </>
        )}
      </div>
    </Prices>
  );
};

const Prices = styled.section({
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
