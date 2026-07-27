const express = require("express");

const router = express.Router();

const {
  getPlaceGallery,
  getExperienceGallery,
  getDestinationGallery,
  getFeaturedGallery,
} = require("../controllers/mediaController");


router.get(
  "/place/:id",
  getPlaceGallery
);

router.get(
  "/experience/:id",
  getExperienceGallery
);

router.get(
  "/destination/:id",
  getDestinationGallery
);

router.get(
  "/featured",
  getFeaturedGallery
);

module.exports = router;