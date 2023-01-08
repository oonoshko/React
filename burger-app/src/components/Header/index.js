import styled from "styled-components";
import Logo from "./Logo/logo";
import Menu from "./Menu/menu";
import Title from "./Title/title";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="wrapperHeader">
          <Logo />
          <Title />
          <Menu />
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header({
  position: "relative",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
});

export default Header;
