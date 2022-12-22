import styled from "styled-components";
import ElementControl from "./ElementControl/elementControl";

const Controls = ({ ingredients, updateBurger, burgerIngredients }) => {
  return (
    <ControlsStyled onClick={updateBurger}>
      {ingredients.map((ingredient) => (
        <ElementControl
          quantity={burgerIngredients[ingredient]}
          key={ingredient}
          ingredient={ingredient}
        />
      ))}
    </ControlsStyled>
  );
};

const ControlsStyled = styled.section({
  flexBasis: "25%",
  textAlign: "center",
  backgroundColor: "rgba(97, 67, 217, 0.766)",
  borderRadius: "50px",
  padding: "9.5% 0",
});

export default Controls;
