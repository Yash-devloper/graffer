import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import { Form } from "react-bootstrap";

function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/admin" element={<AdminLogin />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
