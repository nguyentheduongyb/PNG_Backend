const User = require('~/app/Models/UserModels')
const { multipleMongooseToObject, mongooseToObject } = require('~/util/mongoose')
const { json, response } = require('express')

class UserController {
        async create(req, res, next) {
                const { email } = req.body
                try {
                        const existingUser = await User.findOne({ email: email })
                        if (existingUser) {
                                res.status(201).json({ userId: existingUser._id })
                        }
                        else {
                                const results = await User.create({
                                        email
                                })
                                res.status(201).json({ userId: results._id })
                        }
                }
                catch (error) {
                        res.status(500).json({ message: "Something went wrong" })
                }
        }
        get(req, res, next) {
                User.find({})
                        .then(result => {
                                res.json(result)
                        })
                        .catch(next)
        }

        update(req, res, next) {
                if (!req.params.id) {
                        return res.sendStatus(400)
                }
                User.updateOne({ _id: req.params.id }, req.body)
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
                User.deleteOne({ _id: req.params.id })
                        .then(() => {
                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                        })
                        .catch((error) => {
                                res.sendStatus(500); // Trả về status code 500 nếu có lỗi xảy ra
                        });
        }
        booking(req, res, next) {

                Booking.find().populate('tour')
                        .then(result => {
                                res.json(result)
                        })
                        .catch(next)
        }

}
module.exports = new UserController();
