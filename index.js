const express = require('express'); //common js modules

// send to different route handlers
const app = express(); //inside one project can have several express app

//app: express app to register this route handler with
//'/': watch for request try to access root route
//req: incoming request
//res: outgoing response
app.get('/', (req, res) => {
	// send JSON response back
	res.send({ hi: 'there' });
});

// first: dynamic port binding
// environment variable that heroku gives us
// in dev environment first might not be defined
const PORT = process.env.PORT || 5000;
// express let node know to listen for port
app.listen(PORT);

//second step: setup package.json with engine
//third: "start": "node index.js" in scripts
//last: .gitignore
