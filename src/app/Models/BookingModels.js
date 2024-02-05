const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Booking = new Schema({
        user: {
                type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        tour: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Tour'
        },
        // bookingStatus: {
        //         type: mongoose.Schema.Types.ObjectId, ref: 'BookingStatus'
        // },
        status: { type: Boolean, require: true, default: true }
}, {
        timestamps: true
});

module.exports = mongoose.model('Booking', Booking)