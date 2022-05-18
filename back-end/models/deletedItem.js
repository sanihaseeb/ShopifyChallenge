const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deletedItemSchema = new Schema({

    previousId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    pricePerPiece: {
        type: Number,
        required: true
    },

    comment: {
        type: String,
        required: false
    }

}
);

const DeletedItem = mongoose.model('DeletedItem', deletedItemSchema);
module.exports = DeletedItem;
