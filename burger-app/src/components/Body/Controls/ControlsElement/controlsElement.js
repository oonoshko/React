import styled from "styled-components";
import Image from "../../../OtherComponents/Images/images";

const ControlsElement = ({ ingredient, updateBurger, quantity }) => {
  return (
    <ControlWrapper data-ingredient={ingredient} onClick={updateBurger}>
      <Btn className="btn" data-action="decrement" data-ingredient={ingredient}>
        -
      </Btn>
      <Span>{quantity}</Span>
      <Btn className="btn" data-action="increment" data-ingredient={ingredient}>
        +
      </Btn>
      <Image name={ingredient} />
    </ControlWrapper>
  );
};

const ControlWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px",
  marginBottom: "10px",
});

const Btn = styled.button({
  width: "32px",
  height: "32px",
  lineOut: "none",
  borderRadius: "10px",
  cursor: "pointer",
});

const Span = styled.span({
  textAlign: "center",
});

export default ControlsElement;
