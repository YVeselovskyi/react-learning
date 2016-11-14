const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(express.static('./node_modules/bootstrap/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/login' , (req, res) => {
	console.log(req.body);

	const response = {};
	
	if(req.body.login === 'foo' && req.body.password === 'bar'){
		response['Auth'] = 'Logged';
	} else {
		response['Auth'] = 'Denied';
	}

	res.send(response);
})

app.listen(3000, () => {
	console.log('Success');
});