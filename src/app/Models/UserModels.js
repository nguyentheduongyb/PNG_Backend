const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
        email: { type: String, require: true, unique: true },
        isAdmin: { type: Boolean }
}, {
        timestamps: true
});


module.exports = mongoose.model('User', User)