const express = require('express'); //common js modules
const mongoose = require('mongoose');
//give access to cookies
const cookieSession = require('cookie-session');
//tell passport to use cookie
const passport = require('passport');
const keys = require('./config/keys');
// user before passport as passport uses user
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

// send to different route handlers
const app = express(); //inside one project can have several express app

app.use(
	cookieSession({
		// time for cookie to timeout
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// encrypt key
		keys: [ keys.cookieKey ]
	})
);

//tell passport to use cookie
app.use(passport.initialize());
app.use(passport.session());

//require returns a function that calls app object
require('./routes/authRoutes')(app);

//app: express app to register this route handler with
//'/': watch for request try to access root route
//req: incoming request
//res: outgoing response
// app.get('/', (req, res) => {
// 	// send JSON response back
// 	res.send({ bye: 'bud' });
// });

// first: dynamic port binding
// environment variable that heroku gives us
// in dev environment first might not be defined
const PORT = process.env.PORT || 5000;
// express let node know to listen for port
app.listen(PORT);

//second step: setup package.json with engine
//third: "start": "node index.js" in scripts
//last: .gitignore
