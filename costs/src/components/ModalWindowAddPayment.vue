<template>
  <div class="wrapper">
    <div class="content">
      <div>{{ title }}</div>

      <div class="content">
        <component :is="settings.content"/>
      </div>

      <div class="footer">
        <button @click="close">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AddPayment from './AddPayment.vue'
import AuthComp from '../components/Auth.vue'

export default {
  name: 'ModalWindowAddPayment',

  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
  },

  components: { AuthComp, AddPayment },

  methods: {
    close() {
      this.$modal.hide();
    },
  },

  computed: {
    title() {
      return this.settings.title;
    },
  },
};
</script>

<style lang="sass">
.wrapper
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.2)
  position: absolute
  top: 0
  left: 0

.content
  position: relative
  background-color: #fff
  border-radius: 8px
  padding: 8px

</style>
