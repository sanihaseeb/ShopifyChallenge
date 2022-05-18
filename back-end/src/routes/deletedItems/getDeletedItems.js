const express = require("express");
const router = express.Router();
const DeletedItem = require('../../../models/deletedItem');

router.get('/', async (req, res) => {
    try {
        const items = await DeletedItem.find();
        const ret = items;
        res.send(ret);
    } catch (err) {
        res.status(400).json({
            message: "Unable to get items",
            error: err
        });
    }
})
module.exports = router;
