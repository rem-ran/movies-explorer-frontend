import { apiMovieConfig } from './constants.js';

class MovieApi {
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

  //получить список всех фильмов в виде массива
  getAllSavedMovieCards() {
    return fetch(`${this._url}`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    }).then(this._getResponseData);
  }
}

//создаём экземпляр класса MovieApi для работы с сервером
const movieApi = new MovieApi(apiMovieConfig);

export default movieApi;
