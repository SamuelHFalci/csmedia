<template lang="pug">
  q-page.flex.flex-center
    q-card.q-pa-lg.q-gutter-y-md
      q-input(label='Email' v-model='email')
      q-input(v-model='password' filled='' :type="isPwd ? 'password' : 'text'" hint='Senha' @keyup.enter='doLogin' @click='doLogin')
        template(v-slot:append='')
          q-icon.cursor-pointer(:name="isPwd ? 'visibility_off' : 'visibility'" @click='isPwd = !isPwd')
      q-btn.full-width(label='Entrar' color='primary' @click='doLogin')
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      email: null,
      password: null,
      isPwd: true
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      admLogin: 'auth/admLogin',
      getProfile: 'auth/getProfile'
    }),
    ...mapMutations({
      setUser: 'auth/setUser'
    }),
    // TODO: retirar o loggedIn do global
    async doLogin () {
      this.$q.loading.show()
      await this.login({
        email: this.email,
        password: this.password
      }).then(() => {
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style></style>
