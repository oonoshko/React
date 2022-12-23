import styled from "styled-components";
import Loader from "../Loader/loader";
import ElementControl from "./ElementControl/elementControl";

const Controls = ({
  ingredients,
  updateBurger,
  burgerIngredients,
  loading,
  clearBurger,
}) => {
  return (
    <ControlsStyled onClick={updateBurger}>
      {loading && <Loader />}

      {!loading && (
        <>
          {ingredients.map((ingredient) => (
            <ElementControl
              quantity={burgerIngredients[ingredient]}
              key={ingredient}
              ingredient={ingredient}
            />
          ))}
          <Clear className="clear" onClick={clearBurger}>
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
  backgroundColor: "rgba(97, 67, 217, 0.766)",
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
