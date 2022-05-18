# ShopifyChallenge

### Note: There are two separate directories: front-end and back-end which must be ran separately. 
### Note: Back-end must run before front-end (Kindly run the front-end in the replit shell as the complete .replit command fails to start the front-end because it terminates after starting the back-end)
### Note: Although I have set it as a replit secret, please download .env file from link provided below and add it to back-end/ for execution if trouble is faced regarding mongoose connection string. [If not already accessible on replit]


 
## Inventory Tracker

 In this challenge, we develop an inventory tracker focused on back-end implementation with the following features:
  - Creating Inventory Items
  - Editing Existing Inventory Items
  - Deleting Existing Inventory Items with comments
  - Viewing List of Existing Inventory Items
  - Undeleting previously deleted inventory items - maintaining a 'recycle bin' 

# BACK-END

## How To Run
-   Clone the repository
-   cd back-end
-   **Kindly download .env file and place it in the back-end's root directory (i.e. back-end/) before running the app. You can download it from here: [.env](https://drive.google.com/drive/folders/1aNHwIVWKxvnTJVO8H7H3HPkptuajlPdD?usp=sharing)** (Should already be there on replit as secret, this is just in case)
-   run the command `npm install`
-   run the command `npm run dev`
-   Wait until the application says `Connected to DB` and displays the active port.
-   Test API on browser: Go to localhost:8000
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
-   run `npm install`
-   run `npm start`
-   **Kindly make sure the back-end is up and running before next step**
-   Go to browser and open up localhost:3000, this will lead you to the page of adding a new item

### Add new item from front-end and View Items in Inventory

- Go to `localhost:3000/add-item`
- Enter name, category, quantity, price per piece of item to be added
- Click the Add Item button
- Verify the addition of new item from the list of items being displayed the front end (after clicking on add item successfully)
- Verify from back-end API of get items that the new item has been added (`GET localhost:8000/items`)

### Edit existing item

- Go to `localhost:3000/view-items
- Choose item you want to edit and click on the edit button next for the corresponding item
- Enter name, category, quantity, price per piece of item to be updated (note: fields that will not be filled will remain empty)
- Click the Update Item button
- Verify the update of new item from the list of items being displayed the front end (after clicking on update item successfully)
- Verify from back-end API of get items that the correct item has been updated (`GET localhost:8000/items` or to get the particular item: `GET localhost:8000/items/:id` )

### Delete existing item

- Go to `localhost:3000/view-items
- Choose item you want to delete and click on the delete button next for the corresponding item
- Enter your comment for deletion - optional
- Click the Delete Item button
- Verify the deletion of item from the list of items being displayed the front end (after clicking on delete item successfully)
- Verify from back-end API of get items that the correct item has been deleted (`GET localhost:8000/items` or to ensure we do not get the particular item: `GET localhost:8000/items/:id` )

### Undeleting deleted item

- Go to `localhost:3000/deleted-items
- Choose item you want to undelete and click on the undelete button next for the corresponding item
- Verify the undeletion (i.e. display of previously deleted item on the current inventory page) of item from the list of items being displayed the front end (after clicking on undelete button successfully)
- Verify from back-end API of get items that the correct item has been undeleted (`GET localhost:8000/items` or to ensure we get the particular item: `GET localhost:8000/items/:id` )


## Technologies:
-   NodeJS
-   JavaScript Programming Language
-   MongoDB
-   Express
-   MaterialUI

## Improvements 
-   Need to write tests
-   Sanity checks on front-end - especially empty field issue
-   Deleted items API to also be updated/removed once they have been reverted from being deleted (should be updated according to use cases, i.e. do we need to keep track of UNDELETED items as well?)
-   CI-CD pipeline
