import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailbaleMeals from './AvailableMeals';

const Meals = (props) => {
	return (
		<Fragment>
			<MealsSummary />
			<AvailbaleMeals />
		</Fragment>
	);
};
export default Meals;
