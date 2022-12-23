import styled from "styled-components";
import React from "react";
import { Price, Burger, Controls } from "../../components/BodyMain";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      prices: [],
      ingredients: [],
      ingredientAddingOrder: [],
      burgerCreator: {
        meat: 0,
        pickle: 0,
        salad: 0,
        chicken: 0,
        cheese: 0,
        tomato: 0,
        onion: 0,
      },
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true });

      const data = await await fetch(
        "https://burger-api-xcwp.onrender.com/ingredients"
      ).then((res) => res.json());

      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });

      const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        burgerCreator: quantities,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  findIngredientPrice = (ingredient) => {
    return this.state.prices.find((price) => price.name === ingredient).price;
  };

  handleChangeBurgerIngredientQuantity = (event) => {
    event.preventDefault();

    // Find ingredient which was clicked
    const ingredientClicked =
      event.target.parentNode.dataset["ingredient"] ||
      event.target.dataset["ingredient"];

    // Increment or Decrement ingredient
    const actionClicked =
      event.target.dataset["action"] ||
      event.target.parentNode.dataset["action"];

    const ingredientPrice = this.findIngredientPrice(ingredientClicked);
    this.setState((prevState) => {
      const copyBurgerCreator = { ...prevState.burgerCreator };

      const copyIngredientAddingOrder = [...prevState.ingredientAddingOrder];

      let newPrice = +prevState.orderPrice;

      if (actionClicked === "decrement") {
        newPrice -= +ingredientPrice;

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
          newPrice += +ingredientPrice;
          copyIngredientAddingOrder.push(ingredientClicked);
          copyBurgerCreator[ingredientClicked]++;
        } else {
          return;
        }
      }
      return {
        ...prevState,
        ingredientAddingOrder: copyIngredientAddingOrder,
        burgerCreator: copyBurgerCreator,
        orderPrice: newPrice.toFixed(2),
      };
    });
  };

  clearBurger = () => {
    const clearerBurgerCreator = {};
    for (const ingredient in this.state.burgerCreator) {
      clearerBurgerCreator[ingredient] = 0;
    }
    if (this.state.ingredientAddingOrder.length !== 0) {
      this.setState({
        ingredientAddingOrder: [],
        burgerCreator: clearerBurgerCreator,
        orderPrice: "1.00",
      });
    }
  };

  render() {
    const {
      prices,
      ingredients,
      burgerCreator,
      loading,
      ingredientAddingOrder,
      orderPrice,
    } = this.state;
    return (
      <MainSection>
        <div className="container">
          <MainWrapper>
            <Price loading={loading} prices={prices} />
            <Burger
              ingredientAddingOrder={ingredientAddingOrder}
              totalPrice={orderPrice}
            />
            <Controls
              ingredients={ingredients}
              updateBurger={this.handleChangeBurgerIngredientQuantity}
              burgerIngredients={burgerCreator}
              loading={loading}
              clearBurger={this.clearBurger}
            />
          </MainWrapper>
        </div>
      </MainSection>
    );
  }
}

const MainSection = styled.section({
  padding: "50px 0",
  height: "80vh",
});

const MainWrapper = styled.div({
  display: "flex",
  gap: "15px",
  alignItems: "center",
});
export default Main;
