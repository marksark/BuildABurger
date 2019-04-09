import React, { Component } from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

class Burger extends Component {
    render() {
        return(
            <div className={classes.Burger}>
                <BurgerIngredients type="bread-top"/>    
                <BurgerIngredients type="cheese"/>    
                <BurgerIngredients type="meat"/>    
                <BurgerIngredients type="bread-bottom"/>    
            </div>
        );
    }
}

export default Burger;