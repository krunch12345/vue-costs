<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>

    <main>
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

      <AddPaymentForm
          @add-payment="addPayment"
          :categoryList="categoryList"
      />
    </main>
  </div>
</template>

<script>
import PaymentDisplay from '@/components/PaymentDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    AddPaymentForm,
    PaymentDisplay,
  },

  data: () => ({
    currentPage: 1,
  }),

  methods: {
    ...mapMutations(['ADD_NEW_PAYMENT']),
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),

    addPayment(data) {
      this.ADD_NEW_PAYMENT(data)
    },

    onPageChange(page) {
      this.currentPage = page;
    },
  },

  computed: {
    ...mapGetters([
        'paymentsList',
        'paymentsListTotalAmount',
        'categoryList',
    ]),
  },

  created() {
    this.fetchData()
    this.fetchCategoryList()
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

.header
  display: flex
  justify-content: center
  padding: 2rem 0
  font-size: 32px

</style>
