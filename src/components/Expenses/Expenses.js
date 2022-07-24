import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFliter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
	const [ fliteredYear, setFilterYear ] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === fliteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFliter selected={fliteredYear} onChangeFilter={filterChangeHandler} />
			{filteredExpense.map((expense) => (
				<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</Card>
	);
}

export default Expenses;
