import styled from "styled-components";
import logo from "../../../Assets/images/logo.png";

const Logo = () => {
  return (
    <Logotype>
      <img src={logo} alt="Logo" />
    </Logotype>
  );
};

const Logotype = styled.div({
  flexBasis: "15%",
  width: "48px",
  height: "48px",
});

export default Logo;
