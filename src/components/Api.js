export default class Api {
    constructor({ baseUrl, headers }) {
        this._url = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.text();
        }
        return Promise.reject(`Error ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }

    generateRandomNums() {
        return this._request(`${this._url}`, {
            headers: this._headers,
        });
    }
}