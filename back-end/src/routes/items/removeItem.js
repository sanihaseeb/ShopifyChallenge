const express = require("express");
const router = express.Router();
const Item = require('../../../models/item');
const DeletedItem = require('../../../models/deletedItem');

router.delete("/:id", async (req, res) => {
    const itemToBeDeleted = await Item.findById(req.params.id);
    console.log(itemToBeDeleted);
    Item.findByIdAndRemove(req.params.id)
        .then(async (result) => {
            try {
                const deletedItem = new DeletedItem({
                    previousId: itemToBeDeleted._id,
                    name: itemToBeDeleted.name,
                    category: itemToBeDeleted.category,
                    quantity: itemToBeDeleted.quantity,
                    pricePerPiece: itemToBeDeleted.pricePerPiece,
                    comment: req.body.comment
                });
                const ret = await deletedItem.save();
            } catch (err) {
                console.log(err);
            }
            res.status(200).json({ message: "Item deleted!" });

        })
        .catch((err) => {
            res.status(400).json({
                message: "Unable to delete item",
                error: err
            });
        });
});
module.exports = router;