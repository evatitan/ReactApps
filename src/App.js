import Expense from './components/Expenses';
import Expenses from './components/Expenses';

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
	return (
		<div>
			<h2>Hello react</h2>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
