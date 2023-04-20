// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './App.css';

function App() {
  // const navigate = useNavigate();

  //проверка метода обработки авторизации пользоваетля на странице
  function handleUserSignIn({ password, email }) {
    console.log({ password, email });
  }

  //проверка метода  обработки регистрации пользоваетля на странице
  function handleUserSignUp({ name, password, email }) {
    console.log({ name, password, email });
  }

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
        <Route
          path="/signin"
          element={<Login handleUserSignIn={handleUserSignIn}></Login>}
        ></Route>
        <Route
          path="/signup"
          element={<Register handleUserSignUp={handleUserSignUp}></Register>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
