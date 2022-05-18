const express = require("express");
const router = express.Router();
const Item = require('../../../models/item');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        const ret = items;
        res.send(ret);
    } catch (err) {
        res.status(400).json({
            message: "Unable to get items",
            error: err
        });
    }
})

router.get('/:id', async (req, res) => {
    Item.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(400).json({
                message: "Unable to get item",
                error: err
            });
        });
})
module.exports = router;