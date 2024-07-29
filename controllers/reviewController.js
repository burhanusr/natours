const Review = require('./../models/reviewModel');
const factory = require('./../controllers/handleFactory');

// MIDDLEWARES HANDLER
exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

// ROUTE HANDLER
exports.getAllReviews = factory.getAll(Review);
exports.getReivew = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.patchReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
