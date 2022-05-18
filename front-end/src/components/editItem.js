import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function EditItem() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricePerPiece, setPricePerPiece] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await axios.put(`http://localhost:8000/items/${id}`, {
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
            <button onClick={() => handleSubmit()}>UPDATE ITEM</button>
            <br />
            <br />
            <br />
            <button onClick={() => navigate('/view-items')}>VIEW ALL ITEMS</button>
            <button>VIEW DELETED ITEMS</button>
        </div>

    )
}
export default EditItem;
