import jwtDecode from 'jwt-decode'
import cookie from 'cookie'

export default function ({ store, redirect, route }) {
  const isLogin = store.getters['isLogin']
  if (!isLogin) return redirect('/signin?redirect_to=' + route.path)
}
