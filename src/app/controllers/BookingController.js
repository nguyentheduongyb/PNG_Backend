const Booking = require('~/app/Models/BookingModels')
const User = require('~/app/Models/UserModels')

class BookingController {
        create(req, res, next) {
                const formData = req.body
                User.findOne({ email: formData.email })
                        .then((user) => {
                                const booking = new Booking({
                                        user: user._id,
                                        day: formData.day,
                                        tour: formData.tour,
                                        adult: formData.adult,
                                        child: formData.child,
                                        totalPrice: formData.total
                                })
                                booking.save()
                                        .then(() => {
                                                res.sendStatus(200); // Trả về status code 200 nếu lưu thành công
                                                // sendEmailTo(formData.email)
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
                                Booking.find({ user: user._id }).populate('tour')
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

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
                pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
        },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

}
module.exports = new BookingController();
