import styled from "styled-components";

const PriceElement = ({ elemName, elemPrice }) => {
  return (
    <OnePrice>
      {elemName}: {elemPrice} ₴
    </OnePrice>
  );
};

const OnePrice = styled.div({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "24px",
  marginBottom: "15px",
});

export default PriceElement;
