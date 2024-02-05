const mongoose = require('mongoose');

const connect = () => {
        mongoose.connect('mongodb+srv://nguyentheduongyb:omTCHbLDxAd3F0BY@cluster0.axoynjo.mongodb.net/?retryWrites=true&w=majority',
                {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false
                })
                .then(() => console.log('Connected!'))
                .catch(() => console.log('false'))
}

module.exports = { connect }