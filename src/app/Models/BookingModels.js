const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
        user: {
                type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true
        },
        tour: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Tour', require: true
        },
        day: {
                type: String, require: true
        },
        totalPrice: {
                type: Number, require: true
        },
        adult: {
                type: Number, require: true
        },
        child: {
                type: Number, require: true
        }
        // bookingStatus: {
        //         type: mongoose.Schema.Types.ObjectId, ref: 'BookingStatus'
        // },
        // status: { type: Boolean, require: true, default: true }
}, {
        timestamps: true
});

module.exports = mongoose.model('Booking', Booking)