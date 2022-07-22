import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	// const [ enterTitle, setEnterTitle ] = useState('');
	// const [ enterAmount, setEnterAmount ] = useState('');
	// const [ enterDate, setEnterDate ] = useState('');

	const [ userInput, setUserInput ] = useState({
		enterTitle: '',
		enterAmount: '',
		enterDate: ''
	});

	const titleChangeHandler = (event) => {
		// setEnterTitle(event.target.value);  // way 1
		// setUserInput({                      // way 2
		// 	...userInput,
		// 	enterTitle: event.target.value
		// });
		// way 3
		setUserInput((prevState) => {
			return { ...prevState, enterTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enterAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enterDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		let expenseData = {
			title: userInput.enterTitle,
			amount: userInput.enterAmount,
			date: new Date(userInput.enterDate)
		};
		props.onSaveExpenseData(expenseData);
		setUserInput({
			enterTitle: '',
			enterAmount: '',
			enterDate: ''
		});
	};

	return (
		<form className="new-expense__controls" onSubmit={submitHandler}>
			<div className="new-expense__control">
				<label htmlFor="">Title</label>
				<input type="text" value={userInput.enterTitle} onChange={titleChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label htmlFor="">Amount</label>
				<input
					type="number"
					min="0.01"
					step="0.01"
					value={userInput.enterAmount}
					onChange={amountChangeHandler}
				/>
			</div>
			<div className="new-expense__control">
				<label htmlFor="">Date</label>
				<input
					type="date"
					min="2020-1-1"
					max="2022-12-31"
					value={userInput.enterDate}
					onChange={dateChangeHandler}
				/>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
