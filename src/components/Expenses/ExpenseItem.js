import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
	const [ title, setTitle ] = useState(props.title);

	const clickHandler = () => {
		setTitle('updated!');
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />

			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* here we just pass a pointer to event, not to excute function, 
			because when the component to layout, is to early to excute clickHandler function. */}
			<button onClick={clickHandler}>click</button>
		</Card>
	);
}
export default ExpenseItem;
