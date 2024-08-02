const midtransClient = require('midtrans-client');
const catchAsync = require('./../utils/catchAsync');
const Tour = require('./../models/tourModel');
const Booking = require('./../models/bookingModel');
const CC = require('currency-converter-lt');
const factory = require('./handleFactory');
const AppError = require('./../utils/appError');

const exchangeCurrency = price => {
  return new CC({
    from: 'USD',
    to: 'IDR',
    amount: price,
    isDecimalComma: true
  });
};

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // Check if user already booked tour
  const booking = await Booking.findOne({
    tour: req.params.tourId,
    user: req.user.id
  });

  if (booking) {
    return next(new AppError('You already booked this tour.', 401));
  }

  // Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);

  let priceIdr = await exchangeCurrency(tour.price).convert();
  priceIdr = Math.ceil(priceIdr);

  // -----------   PAYMENT CONFIGURATION  ---------------
  // Create Snap API instance
  const snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: process.env.MID_SECRET
  });

  const parameter = {
    transaction_details: {
      order_id: `${tour._id}${Date.now()}`,
      gross_amount: priceIdr
    },
    item_details: [
      {
        id: tour._id,
        price: priceIdr,
        quantity: 1,
        name: `${tour.name} Tour`
      }
    ],
    customer_details: {
      email: req.user.email
    },
    callbacks: {
      finish: `${req.protocol}://${req.get('host')}/my-tours?tour=${
        req.params.tourId
      }&user=${req.user.id}&price=${tour.price}`,
      error: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`
    },
    expiry: {
      unit: 'minutes',
      duration: 5
    }
  };

  const token = await snap.createTransactionToken(parameter);

  res.status(200).json({
    status: 'success',
    token: token
  });
});

exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { tour, user, price, transaction_status } = req.query;

  if (transaction_status === 'pending') {
    return res.redirect(req.originalUrl.split('?')[0]);
  }

  if (!tour || !user || !price || transaction_status !== 'settlement')
    return next();

  await Booking.create({ tour, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
