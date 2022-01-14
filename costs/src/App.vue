<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>

    <main>
      <PaymentDisplay
        :items="paymentsList"
      />

      <AddPaymentForm
          @add-payment="addPayment"
      />
    </main>
  </div>
</template>

<script>
import PaymentDisplay from '@/components/PaymentDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'App',

  components: {
    AddPaymentForm,
    PaymentDisplay,
  },

  data: () => ({
    show: true,
    counter: 0,
    paymentsList: [],
    currentPage: 1,
  }),

  methods: {
    fetchData() {
      return [
        {
          date: '2020-02-28',
          category: 'Food',
          value: 169,
        },
        {
          date: '2020-03-03',
          category: 'Transport',
          value: 360,
        },
        {
          date: '2020-05-10',
          category: 'Food',
          value: 532,
        },
      ];
    },

    addPayment(data) {
      this.paymentsList.push(data)
    },
  },

  created() {
    this.paymentsList = this.fetchData()
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
