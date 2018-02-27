'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { Review } = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

// Post a new review
router.post('/', jsonParser, (req, res) => {
  const newReview = {
    reviewTemplate: req.body.reviewTemplate,
    endpointLink: req.body.endpointLink,
    reviewTitle: req.body.reviewTitle,
    subHeading: req.body.subHeading,
    mainPicture: req.body.mainPicture,
    picture1: req.body.picture1,
    picture2: req.body.picture2,
    picture3: req.body.picture3,
    picture4: req.body.picture4,
    picture5: req.body.picture1,
    picture6: req.body.picture2,
    picture7: req.body.picture3,
    picture8: req.body.picture4,
    section1: req.body.section1,
    section2: req.body.section2,
    section3: req.body.section3,
    section4: req.body.section4,
    section5: req.body.section5,
    section6: req.body.section6,
    section7: req.body.section7,
    section8: req.body.section8,
    section1Aside: req.body.section1Aside,
    section2Aside: req.body.section2Aside,
    section3Aside: req.body.section3Aside,
    section4Aside: req.body.section4Aside,
    section5Aside: req.body.section5Aside,
    section6Aside: req.body.section6Aside,
    section7Aside: req.body.section7Aside,
    section8Aside: req.body.section8Aside,
    conclusion: req.body.conclusion
  };

  Review
    .create(newReview)
    .then(review => {
      res.status(201).json(review);
    })
    .catch(() => {
      res.status(500).json({ error: 'Something went wrong' });
    });
});

// Alternative Post

router.post('/', jsonParser, (req, res) => {
  const requiredFields = [
    'reviewTemplate',
    'endpointLink',
    'reviewTitle',
    'subHeading',
    'mainPicture',
    'picture1',
    'picture2',
    'picture3',
    'picture4',
    'section1',
    'section2',
    'section3',
    'section4',
    'conclusion'
  ];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'Validation Error',
      message: 'Missing field',
      location: missingField
    });
  }

  const stringFields = [
    'endpointLink',
    'reviewTitle',
    'subHeading',
    'mainPicture',
    'picture1',
    'picture2',
    'picture3',
    'picture4',
    'picture5',
    'picture6',
    'picture7',
    'picture8',
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
    'section6',
    'section7',
    'section8',
    'section1Title',
    'section2Title',
    'section3Title',
    'section4Title',
    'section5Title',
    'section6Title',
    'section7Title',
    'section8Title',
    'section1Aside',
    'section2Aside',
    'section3Aside',
    'section4Aside',
    'section5Aside',
    'section6Aside',
    'section7Aside',
    'section8Aside',
    'conclusion'
  ];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  if (nonStringField) {
    return res.status(422).json({
      code: 422,
      reason: 'Validation Error',
      message: 'Incorrect field type: expect string',
      location: nonStringField
    });
  }

  let {
    reviewTemplate,
    endpointLink,
    reviewTitle,
    subHeading,
    mainPicture,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section1Title,
    section2Title,
    section3Title,
    section4Title,
    section5Title,
    section6Title,
    section7Title,
    section8Title,
    section1Aside,
    section2Aside,
    section3Aside,
    section4Aside,
    section5Aside,
    section6Aside,
    section7Aside,
    section8Aside,
    conclusion
  } = req.body;
  return Review.create({
    reviewTemplate,
    endpointLink,
    reviewTitle,
    subHeading,
    mainPicture,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section1Title,
    section2Title,
    section3Title,
    section4Title,
    section5Title,
    section6Title,
    section7Title,
    section8Title,
    section1Aside,
    section2Aside,
    section3Aside,
    section4Aside,
    section5Aside,
    section6Aside,
    section7Aside,
    section8Aside,
    conclusion
  })
    .then(review => {
      return res.status(201).json({ review });
    })
    .catch(err => {
      if (err.reason === 'Validation Error') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({ code: 500, message: 'Internal server error'});
    });
});

module.exports = { router };