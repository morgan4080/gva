export const state = () => ({
  supabase: null
})

export const getters = {}

export const mutations = {
  set_supa_base: (state, payload) => {
    state.supabase = payload
  }
}

export const actions = {
  initializeSupaBase({commit}, payload) {
    commit('set_supa_base', payload)
  }
}
