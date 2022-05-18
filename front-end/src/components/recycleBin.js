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

function RecycleBin() {
    const navigate = useNavigate();
    const [items, setItems] = useState([{}]);

    const handleRevertDelete = async (itemObj) => {
        await axios.post("http://localhost:8000/items", {
            _id: itemObj.previousId,
            name: itemObj.name,
            category: itemObj.category,
            quantity: itemObj.quantity,
            pricePerPiece: itemObj.pricePerPiece
        });
        await axios.delete(`http://localhost:8000/deleted-items/${itemObj._id}`)
        navigate('/view-items');

    };

    useEffect(() => {
        async function fetchItems() {
            const response = await axios.get(`http://localhost:8000/deleted-items`);
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
                    <h1 className='trip-text'>Deleted Items</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="large" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price Per Piece&nbsp;($)</TableCell>
                                    <TableCell align="right">Comment</TableCell>
                                    <TableCell align="right">Undelete</TableCell>
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
                                        <TableCell align="right">{item.comment ? item.comment : "-"}</TableCell>
                                        <TableCell align="right"><button onClick={() => handleRevertDelete(item)}>Undelete</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div >
            <button onClick={() => navigate('/add-item')}>ADD ITEM</button>
            <button onClick={() => navigate('/view-items')}>VIEW ITEMS</button>
        </div >
    )
}
export default RecycleBin;
