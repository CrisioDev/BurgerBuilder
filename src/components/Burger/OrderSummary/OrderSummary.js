import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                : {props.ingredients[igKey]}
            </li>
        );
    });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Mucho delicious buuurrrrrrrger stuffed with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}€</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
        </Aux>
    );
};

export default orderSummary;