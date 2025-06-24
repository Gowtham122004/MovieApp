import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Favorites from "./context/Favorites";
import Login from "./context/Login";
import Register from "./context/Register";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./App.css";

const App = () => {
  return (
    <FavoriteProvider>
      <Routes>
        <Route path="/" element={<Register />} /> {/* 👈 Default route now shows Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
     <Route path="/home/movie/:id" element={<SingleMovie />} />
      </Routes>
    </FavoriteProvider>
  );
};

export default App;
