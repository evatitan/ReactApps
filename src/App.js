import ExpenseItem from './components/ExpenseItem';
function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Car insrance1',
			amount: 300,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e1',
			title: 'Car insrance2',
			amount: 300,
			date: new Date(2021, 2, 28)
		},
		{
			id: 'e1',
			title: 'Car insrance3',
			amount: 300,
			date: new Date(2021, 2, 28)
		}
	];
	return (
		<div>
			<h2>Hello react</h2>
			<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
			<ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
		</div>
	);
}

export default App;
