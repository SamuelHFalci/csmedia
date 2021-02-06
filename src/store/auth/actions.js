import fbErr from '../../helpers/firebase-messages'
export async function login ({ dispatch, commit }, { email, password }) {
  const pass = await this._vm
    .$auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      const user = {
        token: data.user.refreshToken,
        uuid: data.user.uid
      }
      commit('setLogin', user)
      if (data.user.uuid) return true
      else return false
    })
    .catch(error => {
      console.log('olha o erro ai', error)
      this._vm.$q.notify({
        color: 'negative',
        message: fbErr(error.code),
        classes: 't-notification'
      })
      return false
    })
  if (pass) return true
  return false
}
export async function logoff ({ commit }) {
  commit('setLogoff')
  this.$router.push('/login')
}
export async function passwordRecovery ({ commit }, email) {
  return this._vm.$http.post('/password-recovery', { email })
}
export async function passwordReset ({ commit }, data) {
  console.log(data.token)
  return this._vm.$http.post('/password-reset', data, {
    headers: { Authorization: `Bearer ${data.token}` }
  })
}
