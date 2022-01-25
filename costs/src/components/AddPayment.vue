<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <label for="date">
        <input id="date" type="date" placeholder="Date" v-model="date">
      </label>

      <label for="categories">
        <select id="categories" v-model="category">
          <option
            v-for="category of categoryList"
            :value="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
      </label>

      <label for="value">
        <input id="value" type="number" placeholder="Amount" v-model.number="value">
      </label>

      <button @click="addPayment" :disabled="!category || !value">Add</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  name: 'AddPayment',

  data() {
    return {
      value: this.$route.query.value || '',
      category: this.$route.params.type || '',
      date: '',
    }
  },

  methods: {
    ...mapMutations(['ADD_NEW_PAYMENT']),

    ...mapActions([
      'fetchCategoryList',
    ]),

    addPayment() {
      const {
        value, category, date, paymentDay,
      } = this

      const data = {
        value,
        category,
        date: date || paymentDay,
      }

      this.ADD_NEW_PAYMENT(data)
      this.resetData()
    },

    resetData() {
      this.value = ''
      this.category = ''
      this.date = ''
    },
  },

  computed: {
    paymentDay() {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${year}-${month}-${day}`
    },

    ...mapGetters([
      'categoryList',
    ]),
  },

  created() {
    this.fetchCategoryList()
  },
}
</script>

<style lang="sass" module>

.container
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center

.form
  display: flex
  justify-content: center
  margin: 0 auto
  align-items: center
  padding: 1rem 0

</style>
