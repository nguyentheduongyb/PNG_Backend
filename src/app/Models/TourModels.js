const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Tour = new Schema({
        name: { type: String, require: true },
        description: { type: String },
        price: {
                "adult": { type: Number },
                "child": { type: Number }
        },
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', require: true }],
        tourCode: { type: String, require: true },
        country: { type: String, require: true },
        destinations: [
                { type: String, require: true }
        ],
        expectedCost: { type: Number, require: true },
        image: { type: String, require: true },
        duration: { type: String, require: true },
        ltinerary: {
                "description": { type: String, require: true },
                "schedule": [
                        {
                                day: { type: Number, require: true },
                                destinations: [{ type: String }],
                                description: { type: String, require: true }
                        }
                ]
        },
        slug: { type: String, slug: "name" },
        inforVisa: { type: String },
        pricePolicy: { type: String },
        agency: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },
        status: { type: Boolean, require: true, default: true },
        rate: { type: Number },
        rank: { type: mongoose.Schema.Types.ObjectId, ref: 'Rank' },


}, {
        timestamps: true
});

module.exports = mongoose.model('Tour', Tour)