export function someMutation (/* state */) {}
export function setLogin (state, data) {
  state.isLoggedIn = true
  localStorage.setItem('csm-token', data.token)
  localStorage.setItem('csm-user-uuid', data.uuid)
  this.$router
    .go('/plataforma')
    .then(() => {
      console.log('vai')
    })
    .catch(error => {
      console.log(error)
    })
}
export function setLogoff (state) {
  state.isLoggedIn = false
  localStorage.removeItem('csm-token')
  localStorage.removeItem('csm-user-uuid')
}
