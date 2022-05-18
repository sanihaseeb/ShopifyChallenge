const express = require("express");
const router = express.Router();
const Item = require('../../../models/item');

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id };
    const { name, category, quantity, pricePerPiece } = req.body;
    const update = {
        name,
        category,
        quantity,
        pricePerPiece
    };
    try {
        const response = await Item.findOneAndUpdate(filter, update);
        res.status(200).json({ message: "Item updated!" });
    } catch (err) {
        res.status(400).json({
            message: "Unable to update Item",
            error: err
        });
    }
});
module.exports = router;