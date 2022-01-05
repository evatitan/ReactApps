const express = require('express');
const axios = require('axios');
const app = express();

app.get('/search/users', function(req, res) {
	const { q } = req.query;
	axios({
		url: 'https://api.github.com/search/users',
		params: { q }
	}).then((response) => {
		res.json(response.data);
	});
});

app.listen(5000, 'localhost', (err) => {
	if (!err) {
		console.log('server connect success!'),
			console.log('request data from github click url:http://localhost:5000/search/users');
	} else console.log(err);
});
