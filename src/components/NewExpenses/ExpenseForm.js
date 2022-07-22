import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	// const [ enterTitle, setEnterTitle ] = useState('');
	// const [ enterAmount, setEnterAmount ] = useState('');
	// const [ enterDate, setEnterDate ] = useState('');

	const [ userInput, setUserInput ] = useState({
		enterTitle: '',
		enterAmount: '',
		enterDate: ''
	});
	const titleChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enterTitle: event.target.value
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enterAmount: event.target.value
		});
	};

	const DateChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enterDate: event.target.value
		});
	};

	return (
		<form className="new-expense__controls">
			<div className="new-expense__control">
				<label htmlFor="">Title</label>
				<input type="text" onChange={titleChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label htmlFor="">Amount</label>
				<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label htmlFor="">Date</label>
				<input type="date" min="2020-1-1" max="2022-12-31" onChange={DateChangeHandler} />
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
