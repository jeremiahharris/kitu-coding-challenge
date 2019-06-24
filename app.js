const express = require('express');
const request = require('request');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var users = [];

app.get('/users', (req, res) => {
	let options = {
		url: 'https://randomuser.me/api',
		json: true
	};
	let users_fetched = 0;
	for (let i = 0; i < 10; i++) {
		request.get(options, (error, response, body) => {
			users_fetched++;
			if (!error && response.statusCode == 200) {
				let results = body.results;
				let user_data = results[0];
				let user = {
					gender: user_data.gender,
					firstname: user_data.name.first,
					city: user_data.location.city,
					email: user_data.email,
					cell: user_data.cell
				};
				users.push(user);
			} else {
				console.log('Error retrieving new users: ' + response.statusCode);
				console.log(body);
			}

			if (users_fetched == 10) // once all 10 requests have completed
				res.status(200).send(users);
		});
	}
});

app.post('/users', (req, res) => {
	let user = {
		gender: req.body.gender,
		firstname: req.body.name.first,
		city: req.body.location.city,
		email: req.body.email,
		cell: req.body.cell
	};
	users.push(user);

	res.status(201).json({message: 'User sucessfully created!'});
});

app.get('/users/firstname/:firstname', (req, res) => {
	for (let i = 0; i < users.length; i++) {
		if (users[i].firstname == req.params.firstname) {
			res.status(200).json(users[i]);
			return;
		}
	}

	res.status(404).json({message: 'User not found!'});
});

console.log('Listening on 1337');
app.listen(1337);