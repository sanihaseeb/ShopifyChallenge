import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function DeleteItem() {

    const [comment, setComment] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/items/${id}`, {
            data: {
                comment: comment
            }
        });
        navigate('/view-items');

    };
    return (
        <div>
            <label>
                Comment:
                <input type="text" name="name" value={comment} onChange={e => setComment(e.target.value)} />
            </label>
            <button onClick={() => handleDelete()}>DELETE ITEM</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate('/view-items')}>VIEW ALL ITEMS</button>
            <button onClick={() => navigate('/recycle-bin')}>VIEW DELETED ITEMS</button>
        </div >

    )
}
export default DeleteItem;
