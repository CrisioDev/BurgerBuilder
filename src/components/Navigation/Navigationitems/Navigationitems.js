import React from 'react';
import classes from './Navigationitems.css';
import NavItem from './Navigationitem/Navigationitem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/" >Checkout</NavItem>
    </ul>
);

export default navigationItems;