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
const port = process.env.PORT || 8000;
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

app.get('/', (req, res) => {
    res.send("Welcome to our Inventory Tracking App")
})

app.use("/items", addItem);
app.use("/items", editItem);
app.use("/items", getItem);
app.use("/items", removeItem);
app.use("/deleted-items", getDeletedItem);
