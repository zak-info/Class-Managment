import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

export function hasAuthenticated() {
    const token = getItem('miniblogToken');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('miniblogToken');
    }

    return result;
}

export function login(credentials) {
    // return axios
    //     .post('http://miniblog.local:8888/api/login_check', credentials)
    //     .then(response => response.data.token)
    //     .then(token => {
    //         addItem('miniblogToken', token);

    //         return true;
    //     });
    return true;
}

export function logout() {
    removeItem('miniblogToken');
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}
