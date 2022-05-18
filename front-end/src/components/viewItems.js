import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ViewItems() {
    const navigate = useNavigate();
    const [items, setItems] = useState([{}]);
    const [comment, setComment] = useState('');

    const handleEditButton = async (item) => {
        navigate(`/edit-item/${item._id}`)

    }

    const handleDeleteButton = async (item) => {
        navigate(`/delete-item/${item._id}`)
    }

    useEffect(() => {
        async function fetchItems() {
            const response = await axios.get(`http://localhost:8000/items`);
            const responseData = response.data;
            let tempItem = [];

            responseData.map(item => {
                tempItem.push(item);
            });
            setItems(tempItem);
        }

        fetchItems();
    }, []);

    return (
        <div className="limiter">
            <div className="container-landing100">
                <div className="wrap-landing100">
                    <h1 className='trip-text'>Current Inventory Status</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="large" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price Per Piece&nbsp;($)</TableCell>
                                    <TableCell align="right">Edit</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((item) => (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{item.name}</TableCell>
                                        <TableCell align="right">{item.category}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">{item.pricePerPiece}</TableCell>
                                        <TableCell align="right"><button onClick={() => handleEditButton(item)}>EDIT ITEM</button></TableCell>
                                        <TableCell align="right"><button onClick={() => navigate(`/delete-item/${item._id}`)}>DELETE ITEM</button></TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div >
            <button onClick={() => navigate('/recycle-bin')}>VIEW DELETED ITEMS</button>
        </div >
    )
}
export default ViewItems;
