export default (code) => {
  switch (code) {
    case 'auth/network-request-failed':
      return 'please check your network'
    case 'auth/user-token-expired':
      return 'session timeout. please login again.'
    case 'auth/email-already-exists':
      return 'The provided email is already in use'
    case 'auth/invalid-email':
      return 'The provided email is invalid'
    case 'auth/invalid-password':
      return 'It must be at least 6 characters'
    case 'auth/user-not-found':
      return 'There is no user found'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters'
    case 'auth/wrong-password':
      return 'password is wrong'
    default:
      return 'some thing went wrong.'
  }
}
