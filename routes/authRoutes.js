const passport = require('passport');

module.exports = (app) => {
	//add single route handler
	// 1st arg: use strategy with google
	// 2nd arg: ask google to give user profile and email
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: [ 'profile', 'email' ]
		})
	);

	//second route handler to make sure user goes to the correct directory
	// user already have the code (logged in again)
	app.get('/auth/google/callback', passport.authenticate('google'));
};
