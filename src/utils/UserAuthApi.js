import { apiMainConfig } from './constants.js';

class UserAuthApi {
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

  // регистрация нового пользователя
  register({ name, password, email }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ name, password, email }),
    }).then(this._getResponseData);
  }

  // авторизация пользователя
  authorize({ password, email }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then(this._getResponseData);
  }

  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._headers,
    })
      .then(this._getResponseData)
      .then((data) => data);
  }
}

//создаём экземпляр класса UserAuthApi для работы с сервером
const userAuthApi = new UserAuthApi(apiMainConfig);

export default userAuthApi;
