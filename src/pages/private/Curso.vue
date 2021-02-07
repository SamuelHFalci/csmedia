<template lang="pug">
  q-page.q-pa-md
    .s2rem.q-mb-xl {{ course.name }}
    .row
      .col-xs-12.col-sm-8
        //- video-player(
        //-   class="video-player-box"
        //-   ref="videoPlayer"
        //-   :options="playerOptions"
        //-   :playsinline="true"
        //-   customEventName="customstatechangedeventname"
        //-   @play="onPlayerPlay($event)"
        //-   @pause="onPlayerPause($event)"
        //-   @ended="onPlayerEnded($event)"
        //-   @waiting="onPlayerWaiting($event)"
        //-   @playing="onPlayerPlaying($event)"
        //-   @loadeddata="onPlayerLoadeddata($event)"
        //-   @timeupdate="onPlayerTimeupdate($event)"
        //-   @canplay="onPlayerCanplay($event)"
        //-   @canplaythrough="onPlayerCanplaythrough($event)"
        //-   @statechanged="playerStateChanged($event)"
        //-   @ready="playerReadied")

      .col-xs-12.col-sm-4
        q-list
          q-item
            | teste
          q-item
            | teste
</template>

<script>
import { mapActions } from 'vuex'
import videoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
  components: { videoPlayer },
  data () {
    return {
      playerOptions: {
        height: '360',
        autoplay: true,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: 'https://www.youtube.com/watch?v=1t8mX2LS_HE&feature=emb_logo'
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster:
          'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      },
      course: {},
      user: {}
    }
  },
  async created () {
    this.user = await this.fetchUserData()
    const course = await this.getCourseBySlug(this.$route.params.slug)
    if (this.user.courses.includes(course.docRef)) {
      this.course = course
    } else this.$router.push({ path: `/comprar/${this.$route.params.slug}` })
  },
  methods: {
    ...mapActions({
      fetchUserData: 'users/fetchUserData',
      getCourseBySlug: 'courses/getCourseBySlug'
    }),
    onPlayerPlay (event) {},
    onPlayerPause (event) {},
    onPlayerEnded (event) {},
    onPlayerWaiting (event) {},
    onPlayerPlaying (event) {},
    onPlayerLoadeddata (event) {},
    onPlayerTimeupdate (event) {},
    onPlayerCanplay (event) {},
    onPlayerCanplaythrough (event) {},
    playerStateChanged (event) {},
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  }
}
</script>

<style></style>
