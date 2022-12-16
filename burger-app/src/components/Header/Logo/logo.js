import styled from "styled-components";
import logo from "../../../Assets/images/logo.png";

const Logo = () => {
  return (
    <LogoStyled>
      <img src={logo} alt="" />
    </LogoStyled>
  );
};

const LogoStyled = styled.div({
  width: "48px",
  height: "48px",
});

export default Logo;
