import styled from "styled-components";

const Title = () => {
  return <TitleStyled>My Burger App</TitleStyled>;
};

const TitleStyled = styled.h1({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "2.5rem",
});

export default Title;
