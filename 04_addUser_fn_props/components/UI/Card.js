import React from 'react';
import classes from './Card.module.css';

// use the ${cssClassName} from the father through props
// Card is the son component of AddUser component
const Card = (props) => {
	return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
