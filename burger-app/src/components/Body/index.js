import styled from "styled-components";
import Burger from "./Burger/burger";
import Price from "./Price/price";
import Controls from "./Controls/controls";
import axios from "axios";
import { useEffect, useState } from "react";

const Body = () => {
  const [prices, setPrices] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [burgerCreator, setBurgerCreator] = useState({});
  const [ingredientAddingOrder, setIngredientAddingOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderPrice, setOrderPrice] = useState("1.00");

  useEffect(() => {
    // turn on Loader
    setLoading(true);
    // get request using axios
    axios
      .get("https://burger-api-xcwp.onrender.com/ingredients")
      .then((res) => {
        // get Array for prices
        setPrices(res.data);

        // get Array ingredient's name
        setIngredients(
          res.data.map((ingredient) => {
            return ingredient.name;
          })
        );

        // get Array ingredient's quantities
        setBurgerCreator(
          res.data.reduce((acc, curr) => ({ [curr.name]: 0, ...acc }), {})
        );

        // turn off Loader
        setLoading(false);
      });
  }, []);

  const findPriceOfIngredient = (ingredient) => {
    return prices.find((el) => el.name === ingredient).price;
  };

  const handleChangeBurgerIngredientQuantity = (event) => {
    event.preventDefault();
    //Which ingridient was clicked
    const ingredientClicked =
      event.target.parentNode.dataset["ingredient"] ||
      event.target.dataset["ingredient"];

    // Increment or Decrement ingredient
    const actionClicked =
      event.target.parentNode.dataset["action"] ||
      event.target.dataset["action"];

    // price each ingredient
    const ingredientPrice = findPriceOfIngredient(ingredientClicked);

    const copyBurgerCreator = { ...burgerCreator };

    const copyIngredientAddingOrder = [...ingredientAddingOrder];

    let newPrice = Number(orderPrice);

    if (actionClicked === "decrement") {
      newPrice -= Number(ingredientPrice);

      const idx = copyIngredientAddingOrder.lastIndexOf(ingredientClicked);

      copyIngredientAddingOrder.splice(idx, 1);
      if (copyBurgerCreator[ingredientClicked] <= 0) {
        return;
      }
      copyBurgerCreator[ingredientClicked]--;
    }

    if (actionClicked === "increment") {
      if (
        copyBurgerCreator[ingredientClicked] < 5 &&
        copyIngredientAddingOrder.length < 10
      ) {
        copyBurgerCreator[ingredientClicked]++;
        copyIngredientAddingOrder.push(ingredientClicked);
        newPrice += Number(ingredientPrice);
      } else {
        return;
      }
    }

    setBurgerCreator(copyBurgerCreator);
    setIngredientAddingOrder(copyIngredientAddingOrder);
    setOrderPrice(newPrice.toFixed(2));
  };

  const clearAll = () => {
    const clearerBurgerCreator = {};
    for (const ingredient in burgerCreator) {
      clearerBurgerCreator[ingredient] = 0;
    }
    if (ingredientAddingOrder.length !== 0) {
      setIngredientAddingOrder([]);
      setBurgerCreator(clearerBurgerCreator);
      setOrderPrice("1.00");
    }
  };

  return (
    <MainSection>
      <div className="container">
        <MainWrapper>
          <Price prices={prices} loading={loading} />
          <Burger
            ingredientAddingOrder={ingredientAddingOrder}
            orderPrice={orderPrice}
            clearAll={clearAll}
          />
          <Controls
            ingredients={ingredients}
            burgerIngredients={burgerCreator}
            updateBurger={handleChangeBurgerIngredientQuantity}
            loading={loading}
            clearAll={clearAll}
          />
        </MainWrapper>
      </div>
    </MainSection>
  );
};

const MainSection = styled.section({
  height: "80vh",
});

const MainWrapper = styled.div({
  padding: "2% 0",
  display: "flex",
  gap: "15px",
});

export default Body;
