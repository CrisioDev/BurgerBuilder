import React from 'react';
import mylogo from '../../assets/images/newlogocrisio.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={mylogo} alt="CrisioLogo" style={{maxWidth: props.width, height: props.height}}/>
    </div>
);

export default logo;