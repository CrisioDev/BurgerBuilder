import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.6,
    meat: 1.1,
    bacon: 1.0
}

class BurgerBuilder extends Component {
    state= {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1,
        purchaseable: false,
        ordering: false
    }

    addIngredientHandler = (type) => {
        const newIngCount = this.state.ingredients[type]+1;
        const updatedIngState = {
            ...this.state.ingredients
        };
        updatedIngState[type] = newIngCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngState
        });
        this.updatePurchaseState(updatedIngState);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0){
            console.log("No Ingredients in Array");
        }else{
            const newIngCount = this.state.ingredients[type]-1;
            const updatedIngState = {
                ...this.state.ingredients
            };
            updatedIngState[type] = newIngCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice - priceAddition;
            this.setState({
                totalPrice: newPrice, 
                ingredients: updatedIngState
            });
            this.updatePurchaseState(updatedIngState);
        }
    }

    orderHandler = () => { //refers to class because that the syntax
        this.setState({
            ordering: !this.state.ordering
        });
    }

    updatePurchaseState (updatedIngState) {
        const sum = Object.keys(updatedIngState)
            .map(igKey => {
                return updatedIngState[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el;
            }, 0);
        this.setState({
            purchaseable: sum > 0
        });
    }

    render() {
        const disableIngInfo = {
            ...this.state.ingredients
        };
        for (let key in disableIngInfo){
            disableIngInfo[key] = disableIngInfo[key] <= 0;
        }
        console.log(disableIngInfo);
        return(
            <Aux>
                <Modal 
                    show={this.state.ordering}
                    clicked={this.orderHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    purchaseable={this.state.purchaseable}
                    disableIngredients={disableIngInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    ordering={this.orderHandler}
                />
            </Aux>
        );
    };
};

export default BurgerBuilder;