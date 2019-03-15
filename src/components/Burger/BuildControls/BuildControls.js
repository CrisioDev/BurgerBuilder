import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}€</strong></p>
        {controls.map((ctrl => (
            <BuildControl
                disabled={props.disableIngredients[ctrl.type]} 
                key={ctrl.label} 
                label={ctrl.label} 
                ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
            />
        )))}
        <button 
            className={classes.OrderButton} 
            disabled={(!props.purchaseable)}
            onClick={props.ordering}
            >ORDER NOW</button>
    </div>
);

export default buildControls;