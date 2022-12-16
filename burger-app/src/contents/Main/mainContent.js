import styled from "styled-components";
import React from "react";
import { Price, Burger } from "../../components/ForUsing";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: [],
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
    const data = await await fetch(
      "https://burger-api-xcwp.onrender.com/ingredients"
    ).then((res) => res.json());

    this.setState({
      prices: data,
    });
  };

  render() {
    const { prices, orderPrice } = this.state;
    return (
      <SectionStyled>
        <div className="container">
          <MainWrapper>
            <Price allPrices={prices} />
            <Burger totalPrice={orderPrice} />
          </MainWrapper>
        </div>
      </SectionStyled>
    );
  }
}

const SectionStyled = styled.section({
  padding: "50px 0",
  height: "80vh",
});

const MainWrapper = styled.div({
  display: "flex",
  gap: "15px",
  alignItems: "center",
});
export default Main;
