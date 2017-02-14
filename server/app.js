const express = require('express');
const app = express();

if (process.env.ENVIRONMENT !== 'prod') {
	try {
		// attempt to load dev .env file
		require('../../.env');
	} catch (e) {
		throw 'Environment constiables not found. If in dev, make sure your .env file is in place. If in prod, make sure you have properly configured your environment constiables.';
	}
}

require('./router')(app);

app.listen(process.env.PORT, () => console.log('Listening...'));