export function cleanUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

export function setUser(user, token) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

export function getUser() {
    let user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function getToken() {
    return localStorage.getItem('token');
}
