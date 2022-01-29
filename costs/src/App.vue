<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <transition name="fade">
      <ModalWindowAddPayment
          v-if="showModal"
          :settings="modalSettings"
      />
    </transition>
  </v-app>
</template>

<script>
import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'

export default {
  name: 'App',

  components: {ModalWindowAddPayment},

  data: () => ({
    page: 'dashboard',
    showModal: false,
    modalSettings: {},
  }),

  methods: {
    modalOpen(settings) {
      this.modalSettings = settings
      this.showModal = true
    },
    modalClose() {
      this.showModal = false
      this.modalSettings = {}
    },
  },

  mounted() {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
  },
}
</script>

<style lang="sass">
@import "style/reset"

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin: 0 auto
  display: flex
  flex-direction: column
  max-width: 1140px

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>
