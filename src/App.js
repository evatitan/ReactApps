import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {
	const expenses = [
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
			date: new Date(2021, 7, 18)
		}
	];

	const addExpenseHandler = (expense) => {
		console.log('IN APP.js');
		console.log(expense);
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
