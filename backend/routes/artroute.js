const express = require("express");
const aRouter = express.Router();
const Art = require("../models/art");
const artsController = require("../controllers/arts.js");

aRouter.get("/", artsController.allArts);

aRouter.get("/:id", artsController.showArt);

// aRouter.get("/type/:type", async (req, res) => {
//   try {
//     const type = req.params.type;
//     const arts = await Art.find({
//       type: type
//     });
//     res.json(arts);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }

// });

module.exports = aRouter;
