const Booking = require('~/app/Models/BookingModels')
const User = require('~/app/Models/UserModels')

class BookingController {
        create(req, res, next) {
                const formData = req.body
                User.findOne({ email: formData.user })
                        .then((user) => {
                                const booking = new Booking({
                                        user: user._id,
                                        tour: formData.tour
                                })
                                booking.save()
                                        .then(() => {
                                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                                        })
                                        .catch((error) => {
                                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                                        });
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        get(req, res, next) {
                const { email } = req.params
                User.findOne({ email: email })
                        .then((user) => {
                                Booking.find({ user: user._id })
                                        .then(result => {
                                                res.json(result)
                                        })
                                        .catch(next)
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });

        }

        update(req, res, next) {
                if (!req.params.id) {
                        return res.sendStatus(400)
                }
                Booking.updateOne({ _id: req.params.id }, req.body)
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        delete(req, res, next) {
                if (!req.params.id) {
                        return res.sendStatus(400)
                }
                Booking.deleteOne({ _id: req.params.id })
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }


}
module.exports = new BookingController();
