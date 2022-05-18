const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Item = require('../models/item');
const DeletedItem = require('../models/deletedItem');
const getItem = require("./routes/items/getItem");
const addItem = require("./routes/items/addItem");
const removeItem = require("./routes/items/removeItem");
const editItem = require("./routes/items/editItem");
const getDeletedItem = require("./routes/deletedItems/getDeletedItems")

require("dotenv").config();

// connect to mongodb
const dbURI = process.env.ATLAS_CONNECTION
const port = process.env.PORT || 8080;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(('Connected to DB'));
        app.listen((port), () => console.log((`Active Port: ${port}`)));

    })
    .catch((error) => console.log(error));

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());

// Basic front-end only for adding inventory items
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use("/items", addItem);
app.use("/items", editItem);
app.use("/items", getItem);
app.use("/items", removeItem);
app.use("/deleted-items", getDeletedItem);

// app.get('/items', async (req, res) => {
//     try {
//         const items = await Item.find();
//         const ret = items;
//         res.send(ret);
//     } catch (err) {
//         res.status(400).json({
//             message: "Unable to get items",
//             error: err
//         });
//     }
// })

// app.get('/deleted-items', async (req, res) => {
//     try {
//         const items = await DeletedItem.find();
//         const ret = items;
//         res.send(ret);
//     } catch (err) {
//         res.status(400).json({
//             message: "Unable to get items",
//             error: err
//         });
//     }
// })

// app.get('/items/:id', async (req, res) => {
//     Item.findById(req.params.id)
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((error) => {
//             res.status(400).json({
//                 message: "Unable to get item",
//                 error: err
//             });
//         });
// })

// app.post('/items', async (req, res) => {
//     try {
//         const item = new Item(req.body);
//         const ret = await item.save();
//         res.status(200).json({ message: "Item posted!" });
//     } catch (err) {
//         res.status(400).json({
//             message: "Unable to post item",
//             error: err
//         });
//     }
// })


// app.put('/items/:id', async (req, res) => {
//     const id = req.params.id;
//     const filter = { _id: id };
//     const { name, category, quantity, pricePerPiece } = req.body;
//     const update = {
//         name,
//         category,
//         quantity,
//         pricePerPiece
//     };
//     try {
//         const response = await Item.findOneAndUpdate(filter, update);
//         res.status(200).json({ message: "Item updated!" });
//     } catch (err) {
//         res.status(400).json({
//             message: "Unable to update Item",
//             error: err
//         });
//     }
// });

// app.delete("/items/:id", async (req, res) => {
//     const itemToBeDeleted = await Item.findById(req.params.id);
//     console.log(itemToBeDeleted);
//     Item.findByIdAndRemove(req.params.id)
//         .then(async (result) => {
//             try {
//                 const deletedItem = new DeletedItem({
//                     previousId: itemToBeDeleted._id,
//                     name: itemToBeDeleted.name,
//                     category: itemToBeDeleted.category,
//                     quantity: itemToBeDeleted.quantity,
//                     pricePerPiece: itemToBeDeleted.pricePerPiece,
//                     comment: req.body.comment
//                 });
//                 const ret = await deletedItem.save();
//             } catch (err) {
//                 console.log(err);
//             }
//             res.status(200).json({ message: "Item deleted!" });

//         })
//         .catch((err) => {
//             res.status(400).json({
//                 message: "Unable to delete item",
//                 error: err
//             });
//         });
// });
