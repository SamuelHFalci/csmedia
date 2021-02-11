<template lang="pug">
  q-page-container
    q-page.q-pa-xl
      .text-h4 Cursos
      hr
      .q-mt-xl
      .row.q-col-gutter-lg
        .col-sm-6.col-md-3(v-for="(course, key) in courses.allCourses" :key="key")
          q-card.bg-carddark.course-card.pointer.q-pa-md(:class="checkOwnership(course.docRef) ? '': 'not-owned'" @click="goToCourse(course)")
            q-img(:src="course.cover")
            .text-h5.q-mt-lg.text-center {{course.name}}
            q-btn(:label="checkOwnership(course.docRef) ? 'Assistir': 'Comprar'" color="primary").full-width.q-mt-lg
          q-tooltip(v-if="!checkOwnership(course.docRef)" content-class="bg-primary" content-style="font-size: 16px" anchor="center middle" self="center middle") Você ainda não comprou este curso
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      courses: []
    }
  },
  async mounted () {
    this.courses = await this.getUserCourses()
    console.log(this.courses)
  },
  methods: {
    ...mapActions({
      getUserCourses: 'courses/getUserCourses'
    }),
    checkOwnership (course) {
      if (this.courses.userCourses.includes(course)) return true
      else return false
    },
    goToCourse (course) {
      const isOwned = this.checkOwnership(course.docRef)
      if (isOwned) {
        this.$router.push({ path: `plataforma/curso/${course.slug}` })
      }
    }
  }
}
</script>
<style scoped>
.fixed {
  position: fixed;
}
.course-card:hover {
  border: 1px solid green;
}
.not-owned {
  cursor: not-allowed;
}
.not-owned > div {
  opacity: 0.3;
}
</style>
