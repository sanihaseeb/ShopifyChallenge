const express = require("express");
const router = express.Router();
const Item = require('../../../models/item');

router.post('/', async (req, res) => {
    try {
        const item = new Item(req.body);
        const ret = await item.save();
        res.status(200).json({ message: "Item posted!" });
    } catch (err) {
        res.status(400).json({
            message: "Unable to post item",
            error: err
        });
    }
})
module.exports = router;