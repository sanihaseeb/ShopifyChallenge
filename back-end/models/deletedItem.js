const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deletedItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

}
);

const DeletedItem = mongoose.model('DeletedItem', deletedItemSchema);
module.exports = DeletedItem;
