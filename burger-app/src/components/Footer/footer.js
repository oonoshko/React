import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <FooterWrapper>
          <p>Prepaired by Oleg Onoshko</p>
          <p>31/12/2022</p>
        </FooterWrapper>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.section({
  display: "flex",
  alignItems: "center",
  height: "10vh",
});
const FooterWrapper = styled.section({
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Inter",
  fontWeight: "400",
});

export default Footer;
