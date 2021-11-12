import { createClient } from '@supabase/supabase-js'

export default function( { store }, inject ) {
  const supabaseUrl = 'https://oohowwwejqolkdzhbpjy.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjE5NzkwNywiZXhwIjoxOTUxNzczOTA3fQ.wwbz_Lt-5qs8r5gEHp0TqJcxS7l1OkKCN8SU-XoIjUw' /* process.env.SUPABASE_KEY */
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('OauthLogin', (payload) => {
    return new Promise( () => {
      supabase.auth.signIn({
        provider: payload.provider
      }).then(({ error }) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log("login error", error)
        }
      })
    })
  })

  inject('LogOut', () => {
    return new Promise( () => {
      supabase.auth.signOut().then(({error}) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log("logout error", error)
        } else {
          store.commit('setLoggedInState', false)
        }
      })
    })
  })

  inject('storeUser', () => {
    const user = supabase.auth.user()

    if (user) {
      store.commit('setLoggedInState', true)
      store.commit('setUser', user)
    }
  })

}
