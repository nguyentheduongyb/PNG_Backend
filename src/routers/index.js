const userRouter = require('~/routers/userRouter');
const siteRouter = require('~/routers/siteRouter');
const productRouter = require('~/routers/productRouter');
const searchRouter = require('~/routers/searchRouter');
const genderRouter = require('~/routers/genderRouter');
const categoryRouter = require('~/routers/categoryRouter');
const cartRouter = require('~/routers/cartRouter');
const orderRouter = require('~/routers/orderRouter');
const orderStatusRouter = require('~/routers/orderStatusRouter');
const dealRouter = require('~/routers/dealRouter');
const agencyRouter = require('~/routers/agencyRouter');
const rankRouter = require('~/routers/rankRouter');
const tourRouter = require('~/routers/tourRouter');
// const bookingStatusRouter = require('~/routers/bookingStatusRouter');
const bookingRouter = require('~/routers/bookingRouter');

function routers(app) {
    app.use('/users', userRouter);

    app.use('/api/booking', bookingRouter);

    app.use('/api/tour', tourRouter);

    app.use('/api/product', productRouter);

    app.use('/api/search', searchRouter);

    app.use('/api/deal', dealRouter);

    app.use('/user/cart', cartRouter);

    app.use('/user/order', orderRouter);

    app.use('/user/order/status', orderStatusRouter);

    app.use('/api/category', categoryRouter);

    app.use('/api/gender', genderRouter);

    app.use('/api/rank', rankRouter);

    app.use('/api/agency', agencyRouter);

    app.use('/', siteRouter);
}
module.exports = routers;
