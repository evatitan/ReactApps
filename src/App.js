import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';
const DUMMY_EXPENSE = [
	{
		id: 'e1',
		title: 'Car insrance1',
		amount: 300,
		date: new Date(2021, 2, 28)
	},
	{
		id: 'e2',
		title: 'Car insrance2',
		amount: 350,
		date: new Date(2021, 6, 3)
	},
	{
		id: 'e3',
		title: 'Car insrance3',
		amount: 400,
		date: new Date(2020, 7, 18)
	}
];

function App() {
	const [ expenses, setExpense ] = useState(DUMMY_EXPENSE);

	const addExpenseHandler = (expense) => {
		setExpense((prevExpense) => {
			return [ expense, ...prevExpense ];
		});
	};

	
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
