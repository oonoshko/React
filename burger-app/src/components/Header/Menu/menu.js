import styled from "styled-components";
import MenuItem from "./MenuItem/menuItem";

const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  return (
    <MenuStyled>
      {menuItems.map((item, index) => (
        <MenuItem key={item + index}>{item}</MenuItem>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.ul({
  display: "flex",
  alignItems: "center",
  flexBasis: "22%",
  listStyle: "none",
  gap: "15px",
  fontFamily: "Inter",
  fontWeight: "400",
});

export default Menu;
