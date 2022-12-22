import styled from "styled-components";

const MenuItem = ({ children }) => {
  return <MenuItemStyled>{children}</MenuItemStyled>;
};

const MenuItemStyled = styled.li({
  alignItems: "center",
  cursor: "pointer",
  fontSize: "20px",
});

export default MenuItem;
