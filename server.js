const https = require('https');
const express = require('express');
const app = express();

let target_url = (userId, accessToken) => `https://api.instagram.com/v1/users/${userId}/media/recent/?count=99&access_token=${accessToken}`;

app.get('/api/instafeed', (req, res) => {
	userId = req.query.access_token.split('.')[0];
	accessToken = req.query.access_token;
	getPhotos(target_url(userId, accessToken))
		.then(images => {
			res.json(JSON.parse(images));
		})
		.catch(err => {
			res.send(err);
		});
});

function getPhotos(endpoint) {
	return new Promise((resolve, reject) => {
		https.get(endpoint, res => {
			let rawData = '';
			res.on('data', chunk => rawData += chunk);
			res.on('end', () => {
				resolve(rawData);
			});
		}).on('error', err => reject(err));
	});
}

app.listen(9000, (req, res) => {
	console.log('server started');
});
