<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Area do Aluno</q-toolbar-title>
        <q-btn flat @click="logout">Sair</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {}
  },
  methods: {
    ...mapActions({
      logoff: 'auth/logoff'
    }),
    async logout () {
      await this.logoff()
    }
  }
}
</script>
