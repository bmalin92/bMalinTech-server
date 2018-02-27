'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ReviewSchema = mongoose.Schema({
  reviewTemplate: {
    type: Number,
    required: true
  },
  endpointLink: {
    type: String,
    required: true,
    unique: true
  },
  reviewTitle: {
    type: String,
    required: true,
    unique: true
  },
  subHeading: {
    type: String,
    required: true
  },
  mainPicture: {
    type: String,
    required: true
  },
  picture1: {
    type: String,
    required: true
  },
  picture2: {
    type: String,
    required: true
  },
  picture3: {
    type: String,
    required: true
  },
  picture4: {
    type: String,
    required: true
  },
  section1: {
    type: String,
    required: true
  },
  section2: {
    type: String,
    required: true
  },
  section3: {
    type: String,
    required: true
  },
  section4: {
    type: String,
    required: true
  },
  conclusion: {
    type: String,
    required: true
  },
  section1Title: {
    type: String
  },
  section2Title: {
    type: String
  },
  section3Title: {
    type: String
  },
  section4Title: {
    type: String
  },
  section1Aside: {
    type: String
  },
  section2Aside: {
    type: String
  },
  section3Aside: {
    type: String
  },
  section4Aside: {
    type: String
  },
  picture5: {
    type: String
  },
  picture6: {
    type: String
  },
  picture7: {
    type: String
  },
  picture8: {
    type: String
  },
  section5: {
    type: String
  },
  section6: {
    type: String
  },
  section7: {
    type: String
  },
  section8: {
    type: String
  },
  section5Title: {
    type: String
  },
  section6Title: {
    type: String
  },
  section7Title: {
    type: String
  },
  section8Title: {
    type: String
  },
  section5Aside: {
    type: String
  },
  section6Aside: {
    type: String
  },
  section7Aside: {
    type: String
  },
  section8Aside: {
    type: String
  },
});

const Reviews = mongoose.modelNames.Reviews || mongoose.model('Reviews', ReviewSchema);

module.exports = { Reviews };