// don't use require with mongoose (overwhelms testing)

const mongoose = require('mongoose');
// == const {Schema} = mongoose;
// saves all possible property will loke like
const Schema = mongoose.Schema;

// when there's a google id, it should treated as a string
const userSchema = new Schema({
	googleId: String
});

// collection name, schema
//create model class
mongoose.model('users', userSchema);
