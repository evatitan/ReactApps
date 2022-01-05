import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [ usersList, setUsersList ] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList((prevUsersList) => {
			console.log(name, age);
			console.log(prevUsersList);
			return [ ...prevUsersList, { name, age, id: Math.random() } ];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;