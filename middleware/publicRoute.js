export default function ({ store, redirect }) {
  const isLogin = store.getters['isLogin']
  if (isLogin) {
    return redirect('/404')
  }
}
