import { apiMainConfig } from './constants.js';

class MainApi {
  constructor({ url, headers, credentials }) {
    this._url = url;
    this._credentials = credentials;
    this._headers = headers;
  }

  //метод проверки от сервера и преобразование из json
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText} `);
    }
    return res.json();
  }

  //получить список всех сохранённых фильмов в виде массива
  getAllSavedMovieCards() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //добавить фильм к сохранённым
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._getResponseData);
  }

  //удалить фильм из сохранённых
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: this._credentials,
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //получить данные своего пользователя
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //обновить данные своего пользователя
  updateUserInfo({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._getResponseData);
  }
}

//создаём экземпляр класса MainApi для работы с сервером
const mainApi = new MainApi(apiMainConfig);

export default mainApi;
