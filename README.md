# ShopifyChallenge

### Please download .env file for proper execution.
 
## Inventory Tracker

- In this challenge, I developed an inventory tracker focused on back-end implementation with the following features:
  - Creating Inventory Items
  - Editing Existing Inventory Items
  - Deleting Existing Inventory Items with comments
  - Viewing List of Existing Inventory Items
  - Undeleting previously deleted inventory items - maintaining a 'recycle bin' 

# BACK-END

## How To Run
-   Clone the repository
-   cd back-end
-   **Kindly download .env file and place it in the root/src directory before running the app [I removed it to not show sensitive information]. You can download it from here: [env](https://drive.google.com/drive/folders/1qsTvZjG3ugx8yY8oAbLX50wIGKWj9LyC?usp=sharing)**
-   run the command `npm install`
-   run the command `npm run dev`
-   Wait until the application says `Connected to DB` and displays the active port.
-   Test API on browser: Go to localhost:{port}
-   Front-end is minimalistic and only supported for adding an item to inventory, you can test it by entering name, price and category of a new item and go to endpoint /items to see if the newly added item is present.
-   Test remaining APIs on Postman 

## Endpoints with results</h1>

### ADD NEW ITEM
```
POST: http://localhost:{port}/items
body: 
{
"name": "Sharpener",
"category": "Stationary",
"quantity": 59,
"pricePerPiece" : 1.5
}
RESPONSE: 
{
    "message": "Item posted!"
}

```
### GET ITEMS
```
GET: http://localhost:8000/items

RESPONSE: 
[
    {
        "_id": "62849f5abe0a82fb7b6bb9c8",
        "name": "Sharpener",
        "category": "Stationary",
        "quantity": 59,
        "pricePerPiece": 1.5,
        "__v": 0
    }
]

```
### GET ITEM BY ID
```
GET: http://localhost:8000/items/62849f5abe0a82fb7b6bb9c8

RESPONSE: 
{
    "_id": "62849f5abe0a82fb7b6bb9c8",
    "name": "Sharpener",
    "category": "Stationary",
    "quantity": 59,
    "pricePerPiece": 1.5,
    "__v": 0
}

```
### EDIT ITEM BY ID

```
PUT: http://localhost:8000/items/62849f5abe0a82fb7b6bb9c8
body:   
 {
"name": "Sharpener",
"category": "Stationary",
"quantity": 73,
"pricePerPiece" : 1.5
}
RESPONSE: 
{
    "message": "Item updated!"
}
```
### GET ITEM BY ID (check update)
```
GET: http://localhost:8000/items/62849f5abe0a82fb7b6bb9c8

RESPONSE: 
{
"name": "Sharpener",
"category": "Stationary",
"quantity": 73,
"pricePerPiece" : 1.5
}

```
### DELETE ITEM BY ID
```
DELETE: http://localhost:8000/items/62849f5abe0a82fb7b6bb9c8

body: {
    "comment: "Contract cancelled with sharpener producer"
}
RESPONSE: 
{
    "message": "Item deleted!"
}
```

### GET ALL ITEMS (check if deleted item exists anymore)
```
GET: http://localhost:8000/items

RESPONSE: 
[]

```
### GET DELETED ITEMS (i.e. recycle bin to give option of reverting deletion)
```

GET: http://localhost:8000/deleted-items

RESPONSE: 
[ 
    {
        "_id": "628431f11f7163f1d5188df4",
        "previousId": "628431b31f7163f1d5188dee",
        "name": "Pencil",
        "category": "Stationary",
        "quantity": 3,
        "pricePerPiece": 2,
        "comment": "No more color pencils",
        "__v": 0
    },
    {
        "_id": "62849e2fbe0a82fb7b6bb9c5",
        "previousId": "62849e1dbe0a82fb7b6bb9c0",
        "name": "Sharpener",
        "category": "Stationary",
        "quantity": 59,
        "pricePerPiece": 1.5,
        "__v": 0
    },
    {
        "_id": "6284a04fbe0a82fb7b6bb9d0",
        "previousId": "62849f5abe0a82fb7b6bb9c8",
        "name": "Sharpener",
        "category": "Stationary",
        "quantity": 73,
        "pricePerPiece": 1.5,
        "comment": "Contract cancelled with sharpener producer",
        "__v": 0
    }
]]

```

# FRONT-END

-   cd front-end
-   run npm install
-   run npm start



## Technologies:
-   NodeJS
-   JavaScript Programming Language
-   MongoDB
-   Express

## Improvements 
-   Need to write tests
-   Front-end support
-   Proper CI-CD pipeline
