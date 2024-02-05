const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Agency = new Schema({
        name: { type: String, require: true },
        description: { type: String },
        slug: { type: String, slug: "name" },
        imgCover: { type: String },
        rate: { type: Number },
        category: [{
                type: mongoose.Schema.Types.ObjectId, ref: 'Category'
        }],
        follower: { type: Number },
        status: { type: Boolean, require: true, default: true }
}, {
        timestamps: true
});

module.exports = mongoose.model('Agency', Agency)