import { useState } from "react";
import {Routes, Route, redirect } from "react-router-dom"
import AdminPage from "./Content/Content";
import ItemForm from "./Content/ContentBody/ItemForm/ItemForm";
import Login from "./Login/Login";
import Register from "./Register/Register";
import HomePage from "./HomePage/HomePage";
import ItemData from "./Content/ContentBody/ItemData/ItemData";

function App() {
  // const [token, setToken] = useState()
  // if(!token){
  //   return <Register setToken = {setToken}/>
  // }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<ItemForm />} />
        <Route path="/user/data/:id" element={<ItemData />} />
      </Routes>
    </div>
  );
}

export default App;
