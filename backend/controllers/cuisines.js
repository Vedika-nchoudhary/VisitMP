const Cuisine = require("../models/cuisine");

module.exports.allCusines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find({});

        res.json(cuisines);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports.showCuisine = async (req, res) => {
    try {
        let { id } = req.params;

        const cuisine = await Cuisine.findById(id);

        if (!cuisine) {
            return res.status(404).json({
                message: "Cuisine not found"
            });
        }

        res.json(cuisine);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}