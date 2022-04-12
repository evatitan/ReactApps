import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorMadal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const [ username, setUsername ] = useState('');
	const [ age, setAge ] = useState('');
	const [ error, setError ] = useState();

	const addUserHandle = (event) => {
		event.preventDefault();
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Ivalid input',
				message: 'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (+age < 1) {
			setError({
				title: 'Ivalid age',
				message: 'Please enter a valid age (>0).'
			});
			return;
		}
		// console.log(username, age);
		props.onAddUser(username, age);
		setUsername('');
		setAge('');
	};

	const usernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && <ErrorMadal title={error.title} message={error.message} onConfirm={errorHandler} />}
			{/* Card component is the son component of AddUser component */}
			<Card className={classes.input}>
				<form onSubmit={addUserHandle}>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" value={username} onChange={usernameHandler} />
					<label htmlFor="age">Age(Years)</label>
					<input type="bumber" id="age" value={age} onChange={ageHandler} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
