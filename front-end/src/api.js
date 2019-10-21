import apiUrl from './apiUrl';
import { setUser, getToken } from './login';

/**
 * Chama uma função REST da api
 * @param {string} restFn função rest a ser executada. ex.: 'login', 'user/new'
 * @param {object} body corpo da requisição
 */
export async function request(restFn, body) {
    let token = getToken();
    let error = null;
    if (restFn[0] === '/') {
        restFn = restFn.substr(1);
    }
    try {
        let result = await fetch(`${apiUrl}/${restFn}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
            body: JSON.stringify(body),
        });

        let json = await result.json();

        if (result.ok && !json.error) { // deu certo
            return json;
        } else {
            error = json;
        }
    } catch (err) {
        console.log(err);
        throw { error: 'network error' };
    }
    if (error) throw error;
}

export async function login(email, password) {
    let res = await request('login', {
        email,
        password,
    });

    setUser(res.user, res.token);
}
