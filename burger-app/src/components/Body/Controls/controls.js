import styled from "styled-components";
import Loader from "../../OtherComponents/Loader/loader";
import ControlsElement from "./ControlsElement/controlsElement";

const Controls = ({
  ingredients,
  updateBurger,
  burgerIngredients,
  loading,
  clearAll,
}) => {
  return (
    <ControlsStyled onClick={updateBurger}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {ingredients.map((ingredient) => (
            <ControlsElement
              quantity={burgerIngredients[ingredient]}
              key={ingredient}
              ingredient={ingredient}
            />
          ))}
          <Clear className="clear" onClick={clearAll}>
            Clear
          </Clear>
        </>
      )}
    </ControlsStyled>
  );
};

const ControlsStyled = styled.section({
  flexBasis: "25%",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "50px",
  padding: "7% 0",
});

const Clear = styled.button({
  width: "100px",
  fontFamily: "Inter",
  fontSize: "16px",
  backgroundColor: "black",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  color: "white",
  cursor: "pointer",
  marginTop: "20px",
});

export default Controls;
