
const selectors = {
  isShowingSignup: (store) => store.auth.showSignup,
  getUser: (store) => store.auth.user,
  getAuth: (store) => store.auth,
}

export default selectors;