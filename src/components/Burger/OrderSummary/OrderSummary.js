import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  componentDidUpdate() {
      console.log('[OrderSummary] Did Update');
  }

  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>
          Mucho delicious buuurrrrrrrger stuffed with following ingredients:
        </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}€</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Success" clicked={this.props.continue}>
          CONTINUE
        </Button>
        <Button btnType="Danger" clicked={this.props.cancel}>
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
