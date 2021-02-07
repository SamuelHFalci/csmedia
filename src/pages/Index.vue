<template lang="pug">
  q-page
    q-header.bg-primary.text-white(elevated='' height-hint='98')
      q-tabs.mobile-hide(align='center')
        q-tab(@click="scroll('home')" label='Home')
        q-tab(@click="scroll('cursos')" label='CURSOS')
        q-tab(@click="scroll('podcasts')" label='PODCASTS')
        q-tab(@click="scroll('workshops')" label='WORKSHOPS')
      q-btn.fixed-top-right(@click="$router.push('login')" flat='') Entrar
      q-expansion-item.desktop-hide(expand-separator='' icon='menu' style='width: 50%')
        q-list
          q-item
            p(@click="scroll('home')") HOME
          q-item
            p(@click="scroll('cursos')") CURSOS
          q-item
            p(@click="scroll('podcasts')") PODCASTS
          q-item
            p(@click="scroll('workshops')") WORKSHOPS
    .parallax.parallax-img-1.pointer(@click="openVideoModal('https://www.youtube.com/embed/1t8mX2LS_HE')")
      q-tooltip(anchor='center middle' transition-show='flip-right' transition-hide='flip-left' content-class='bg-primary' :content-style="{ color: '#fff' }") Clique para assistir
      .center
        q-icon.s35rem(name='play_circle_outline')
    div(ref='cursos')
    | {{courses}}
    section.q-mt-xl.q-mb-xl
      .row.justify-center
        p.home-title.q-mt-xl CURSOS

      q-carousel.bg-secondary.text-white.shadow-1.rounded-borders(v-model='slide' transition-prev='scale' transition-next='scale' swipeable='' animated='' control-color='white' navigation='' arrows='' height='auto')
        q-carousel-slide(v-for='(course, key) in courses' :name='course.slug' :key='key' style='padding: 0px')
          .row
            .col-xs-12.col-sm-6(@click='openVideoModal(course.presentation)')
              .course-cover.pointer(:style='`background-image: url(${course.cover})`')
                q-tooltip(anchor='center middle' transition-show='flip-right' transition-hide='flip-left' content-class='bg-primary' :content-style="{ color: '#ffffff' }") Clique para assistir
                .center
                  q-icon.s35rem(name='play_circle_outline')
            .col-xs-12.col-sm-6
              .q-mt-md.text-center.s2rem {{ course.name }}
              .q-mt-md.text-center.s15rem
                | {{ course.description }}
              .q-mt-md.text-center
                span.s15rem  R$:
                span.s3rem {{ course.price }}
                span.s15rem ,00
              .q-mt-xl.text-center
                q-btn(color='primary' label='COMPRAR')
    div(ref='podcasts')
    section.q-mt-xl.q-mb-xl
      .row.justify-center
        p.home-title.q-mt-xl PODCASTS
      .row.justify-center
        .col-xs-12.col-sm-6.q-gutter-y-lg
          .row.text-center.pointer(@click="openExternalLink('https://open.spotify.com/show/5pMHkOtuB92Aa28bfpj8JF?si=yVg3jAlhRlGoB4J7_ot3Ew')")
            .col-xs-4.self-center
              q-img.img50(src='../assets/images/spotify.png')
            .col-xs-4.self-center.s15rem SPOTIFY
            .col-xs-4.self-center
              q-icon.s35rem.pointer(name='play_circle_outline')
          .row.text-center.pointer(@click="openExternalLink('https://podcasts.apple.com/br/podcast/cesar-santos/id1475752599')")
            .col-xs-4.self-center
              q-img.img40(src='../assets/images/apple-podcasts.svg')
            .col-xs-4.self-center.s15rem APPLE PODCAST
            .col-xs-4.self-center
              q-icon.s35rem.pointer(name='play_circle_outline')
          .row.text-center.pointer(@click="openExternalLink('https://soundcloud.com/cesarandsantos')")
            .col-xs-4.self-center
              q-img.img30(src='../assets/images/soundcloud.png')
            .col-xs-4.self-center.s15rem SOUND CLOUD
            .col-xs-4.self-center
              q-icon.s35rem.pointer(name='play_circle_outline')
          .row.text-center.pointer(@click="openExternalLink('https://castbox.fm/channel/id2235467')")
            .col-xs-4.self-center
              q-img.img30(src='../assets/images/castbox.png')
            .col-xs-4.self-center.s15rem CASTBOX
            .col-xs-4.self-center
              q-icon.s35rem.pointer(name='play_circle_outline')
    div(ref='workshops')
    .parallax.parallax-img-2.pointer(@click="openVideoModal('https://www.youtube.com/embed/1t8mX2LS_HE')")
    section.q-mt-xl.q-mb-xl
      .row.justify-center
        p.home-title.q-mt-xl WORKSHOPS
    div(style='height: 1000px')
    q-dialog(v-model='videoModal')
      div(style='max-width: 90%')
        .q-video.video
          iframe(:src='videoModalUrl' frameborder='0' allowfullscreen='')

</template>

<script>
// import { Youtube } from 'vue-youtube'
export default {
  name: 'PageIndex',
  components: {
    // Youtube,
  },
  data () {
    return {
      slide: 'guitarra',
      videoId: '1t8mX2LS_HE',
      courses: [],
      playerVars: {
        autoplay: 1
      },
      videoModal: false,
      videoModalUrl: null
    }
  },
  methods: {
    openVideoModal (url) {
      console.log(url)
      this.videoModal = true
      this.videoModalUrl = url
    },
    playing () {
      console.log('o/ we are watching!!!')
    },
    scroll (element) {
      if (element === 'home') {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } else {
        const el = this.$refs[element]
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  },
  async mounted () {
    const courses = await this.$db()
      .collection('cursos')
      .get()
      .then(documents => {
        documents.forEach(element => {
          console.log('tttttttttttttttttt', element.data())
          this.courses.push(element.data())
        })
      })
    console.log('cursossss', courses)
    console.log('cursossssssssssssssss', this.courses)
  }
}
</script>
<style scoped>
.fixed-top-right {
  position: fixed;
  top: 5px;
  right: 10px;
}
.fixed {
  position: fixed;
}
.parallax {
  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.parallax-img-1 {
  /* The image used */
  background-image: url('../assets/images/introBanner.jpg');
}
.parallax-img-2 {
  /* The image used */
  background-image: url('../assets/images/introBanner.jpg');
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.video {
  width: 960px;
  height: 540px;
}
@media screen and (max-width: 600px) {
  .video {
    width: 340px;
    height: auto;
  }
}
.course-cover {
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
