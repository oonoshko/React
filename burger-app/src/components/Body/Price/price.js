import styled from "styled-components";
import Loader from "../../OtherComponents/Loader/loader";
import PriceElement from "./PriceElement/priceElement";

const Price = ({ prices, loading }) => {
  return (
    <Prices>
      <PriceTitle>Our Prices</PriceTitle>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {prices.map((price) => {
              const { name: ingredientName, price: ingredientPrice } = price;
              return (
                <PriceElement
                  key={ingredientName + price._id}
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
  backgroundColor: "white",
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
