import { request } from './generic.service'

const getReg = data => request({ url: `auth/signup`, method: 'post', data });

const getLogin = data => request({ url: `auth/login`, method: 'post', data });

const getLogout = data => request({ url: `auth/logout`, method: 'post', data });

export { getReg, getLogin, getLogout }
