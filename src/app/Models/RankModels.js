const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Rank = new Schema({
        name: { type: String, require: true },
}, {
        timestamps: true
});

module.exports = mongoose.model('Rank', Rank)