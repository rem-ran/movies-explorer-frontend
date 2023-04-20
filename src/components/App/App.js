// import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './App.css';

function App() {
  // const navigate = useNavigate();

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies></SavedMovies>}
        ></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
