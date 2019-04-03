import React from 'react';
import styles from './BurgerIngredients.css';

const burgerIngredients = (props) => {
    let ingredient = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.breadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = <div className={styles.breadBottom}></div>
            break;

    }
    return(
    <div>{ingredient}</div>  
    )
}

export default burgerIngredients;
