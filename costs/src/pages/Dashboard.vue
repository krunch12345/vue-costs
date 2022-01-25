<template>
  <div>
    <PaymentDisplay
        :items="paymentsList"
        :total-pages="Math.ceil(paymentsList.length / 4)"
        :total="paymentsList.length"
        :per-page="4"
        :current-page="currentPage"
        @pagechanged="onPageChange"
    />

    <div>
      Total: {{ paymentsListTotalAmount }}
    </div>

    <button
        @click="addPayment"
        title="Add new cost"
        :class="$style.btnAdd"
    >
      ADD NEW COST +
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaymentDisplay from '../components/PaymentDisplay.vue'

export default {
  name: 'DashboardPage',

  components: {
    PaymentDisplay,
  },

  data: () => ({
    currentPage: 1,
    showModal: false,
    modalSettings: {},
  }),

  methods: {
    ...mapActions([
      'fetchData',
    ]),

    onPageChange(page) {
      this.currentPage = page
    },

    addPayment() {
      this.$modal.show({
        title: 'Add new payment',
        content: 'addPayment',
      })
    },

    authModalOpen() {
      this.modalSettings = {
        title: 'Auth',
        content: 'auth',
      }
      this.showModal = true
    },

    paymentModalHide() {
      this.showModal = false
      this.modalSettings = {}
    },
  },

  computed: {
    ...mapGetters([
      'paymentsList',
      'paymentsListTotalAmount',
    ]),
  },

  mounted() {
    this.fetchData()
    this.$modal.show({})
    this.$modal.hide()
  },
}
</script>

<style lang="sass" module>

.btnAdd
  width: fit-content

</style>