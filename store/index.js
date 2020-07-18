import Vue from 'vue'
import { setCookie, removeCookie } from '@/helpers/cookie'
export const state = () => ({
  posts: {},
  authUser: null,
})

export const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
  SET_AUTH_USER: (state, userData) => {
    state.authUser = userData
  },
}

export const getters = {
  posts: (state) => state.posts,
  currentUser: (state) => state.authUser,
  isLogin: (state) => !!state.authUser,
}

export const actions = {
  nuxtServerInit({ commit }, { req, $fireStore, $fireAuth, $error }) {
    return $fireStore
      .collection('posts')
      .get()
      .then((querySnapshot) => {
        let postsData = {}
        querySnapshot.forEach(function (doc) {
          const data = doc.data()
          postsData[doc.id] = {
            ...data,
            published_date: data.published_date.toDate(),
          }
        })
        commit('SET_POSTS', postsData)
      })
      .catch((err) => {
        // handle error later
      })
  },
  onAuthStateChangedAction: ({ commit }, { authUser, claims }) => {
    if (authUser) {
      authUser
        .getIdToken()
        .then((token) => {
          setCookie(token)
          const userData = {
            auth_time: claims.auth_time,
            email: authUser.email,
            exp: claims.exp,
            iat: claims.iat,
            name: authUser.displayName,
            picture: authUser.photoURL,
            user_id: claims.user_id,
          }
          if (!authUser.displayName) {
            setTimeout(() => {
              userData.picture = authUser.photoURL
              userData.name = authUser.displayName
              commit('SET_AUTH_USER', userData)
            }, 500)
          } else {
            commit('SET_AUTH_USER', userData)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      claims = null
      commit('SET_AUTH_USER', null)
      removeCookie()
    }
  },
}
