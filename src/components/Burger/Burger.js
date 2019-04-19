import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    const incomingIngredients = Object.keys(props.ingredients)
    //transform incoming ingredients object into an array
    .map(each => {
        //capture the length of an array that matches # of each ingredient (i.e. double meat, single cheese)
        return [...Array(props.ingredients[each])].map((_,i) => {
            return <BurgerIngredients key={each+i} type={each}/>;
        });
    });
    console.log(incomingIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>    
            {incomingIngredients}   
            <BurgerIngredients type="bread-bottom"/>    
        </div>
    );
}

export default burger;