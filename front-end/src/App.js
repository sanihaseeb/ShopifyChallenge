import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import AddItem from './components/addItem';
import ViewItems from "./components/viewItems";
import RecycleBin from "./components/recycleBin";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EditItem from './components/editItem';
import DeleteItem from './components/deleteItem';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Routes>
            <Route path="add-item" element={<AddItem />} />
            <Route path="view-items" element={<ViewItems />} />
            <Route path="recycle-bin" element={<RecycleBin />} />
            <Route path="edit-item/:id" element={<EditItem />} />
            <Route path="delete-item/:id" element={<DeleteItem />} />
            <Route path='/' element={<Navigate to='/add-item' replace />} />
          </Routes>
        </Router>

      </header>
    </div >
  );
}

export default App;
