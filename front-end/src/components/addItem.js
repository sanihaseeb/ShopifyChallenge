import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

function AddItem() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePerPiece, setPricePerPiece] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async () => {
        await axios.post("http://localhost:8000/items", {
            name: name,
            category: category,
            quantity: quantity,
            pricePerPiece: pricePerPiece
        });
        navigate('/view-items');

    };
    return (
        <div>

            <label>
                Name:
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Category:
                <input type="text" name="category" value={category} onChange={e => setCategory(e.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="text" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </label>
            <label>
                Price Per Piece:
                <input type="text" name="pricePerPiece" value={pricePerPiece} onChange={e => setPricePerPiece(e.target.value)} />
            </label>
            <button onClick={() => handleSubmit()}>ADD ITEM</button>
            <br />
            <br />
            <br />
            <button onClick={() => navigate('/view-items')}>VIEW ALL ITEMS</button>
            <button onClick={() => navigate('/recycle-bin')}>VIEW DELETED ITEMS</button>
        </div>
    )
}
export default AddItem;
