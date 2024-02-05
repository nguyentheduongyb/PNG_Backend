const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Deal = new Schema({
        country: { type: String, require: true },
        discount: { type: String, require: true },
        slug: { type: String, slug: "country" },
        image: { type: String },
        status: { type: Boolean, require: true, default: true }
}, {
        timestamps: true
});

module.exports = mongoose.model('Deal', Deal)