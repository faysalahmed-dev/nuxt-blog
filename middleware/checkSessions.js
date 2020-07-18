import jwtDecode from 'jwt-decode'
import cookie from 'cookie'

export default function ({ req, store, redirect, route }) {
	console.log('check sessions')
	if(process.server) {
		if(req.headers.cookie) {
			const parsedCookie = cookie.parse(req.headers.cookie);
			if(parsedCookie && parsedCookie.auth_token) {
				const user = jwtDecode(parsedCookie.auth_token)
				if(user) {
					store.commit('SET_AUTH_USER', user)
				}
			}
		}
	}
}