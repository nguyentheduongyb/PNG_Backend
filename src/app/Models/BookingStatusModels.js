const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingStatus = new Schema({
        status: { type: String, require: true, unique: true },
}, {
        timestamps: true
});

module.exports = mongoose.model('BookingStatus', BookingStatus)