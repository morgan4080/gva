export const state = () => ({
  loggedIn: false,
  user: null,
})

export const getters = {
  getLoggedInState: (state) => {
    return state.loggedIn
  },
  getUser: (state) => {
    return state.user
  }
}

export const mutations = {
  setLoggedInState: (state, payload = false) => {
    state.loggedIn = payload
  },
  setUser: (state, payload) => {
    state.user = payload
  }
}

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async Oauth2Login({}, payload) {
    await this.$OauthLogin(payload)
  },
  async logout() {
    await this.$LogOut();
  },
  async storeUser() {
    await this.$storeUser();
  },
  // eslint-disable-next-line no-empty-pattern
  contactUs({}, payload) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const { context, formData } = payload; // contactForm

        const serverUrl = `?context=${context}`;

        const data = await this.$axios.post(serverUrl, formData);

        resolve(data)

      } catch (e) {
        reject(e)
      }
    })
  }
}
