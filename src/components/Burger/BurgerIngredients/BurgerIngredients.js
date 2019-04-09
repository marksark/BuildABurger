import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.css';

const burgerIngredients = (props) => {
    let ingredient = null;
    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className="Meat"></div>;
            break;
        case ('cheese'):
            ingredient = <div className="Cheese"></div>;
            break;
        case ('salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}

burgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredients;
