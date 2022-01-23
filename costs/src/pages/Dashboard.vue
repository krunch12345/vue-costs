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
        @click="goToPage('addpayment')"
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
  }),

  methods: {
    ...mapActions([
      'fetchData',
    ]),

    onPageChange(page) {
      this.currentPage = page;
    },

    goToPage(pageName) {
      this.$router.push(pageName);
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
  },
}
</script>

<style lang="sass" module>

.btnAdd
  width: fit-content

</style>