import styled from "styled-components";

const Image = ({ name }) => {
  return (
    <ImageStyled
      src={require(`../../../../Assets/images/ingredients/${name}.png`)}
    ></ImageStyled>
  );
};

const ImageStyled = styled.img({
  width: "32px",
});

export default Image;
