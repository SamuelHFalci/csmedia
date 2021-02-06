<template lang="pug">
  q-page-container
    q-page.q-pa-xl
      .text-h4 Meus Cursos
      hr
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      myCourses: []
    }
  },
  async mounted () {
    this.myCourses = await this.getUserCourses()
  },
  methods: {
    ...mapActions({
      getUserCourses: 'courses/getUserCourses'
    }),
    getCourses () {}
  }
}
</script>
<style scoped>
.fixed {
  position: fixed;
}
</style>
