import jsCookie from 'js-cookie';

export const setCookie = (token) => jsCookie.set('auth_token',token)

export const removeCookie = () => jsCookie.remove('auth_token')