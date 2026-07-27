const express = require("express");

const router = express.Router();

const { getExperiences, getExperienceDetail } = require("../controllers/experiences");

router.get("/", getExperiences);
router.get("/detail/:type/:id", getExperienceDetail);

module.exports = router;