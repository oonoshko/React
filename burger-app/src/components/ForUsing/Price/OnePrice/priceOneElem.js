import styled from "styled-components";

const PriceOneElem = ({ oneElemName, oneElemPrice }) => {
  return (
    <OnePriceStyled>
      {oneElemName}: {oneElemPrice} ₴
    </OnePriceStyled>
  );
};

const OnePriceStyled = styled.div({
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "24px",
  marginBottom: "15px",
});

export default PriceOneElem;
