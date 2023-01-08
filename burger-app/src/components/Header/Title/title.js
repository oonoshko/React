import styled from "styled-components";

const Title = () => {
  return (
    <TitleStyled>
      <h1>My Burger App</h1>
    </TitleStyled>
  );
};

const TitleStyled = styled.div({
  flexBasis: "35%",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "24px",
});

export default Title;
