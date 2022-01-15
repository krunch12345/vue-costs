<template>
  <div :class="$style.container">
    <button
      @click="onShow"
      title="Add new cost"
      :disabled="isShow"
      :class="$style.btnAdd"
    >
      ADD NEW COST +
    </button>

    <div :class="$style.form" v-if="isShow">
      <label for="date">
        <input id="date" type="date" placeholder="Date" v-model="date">
      </label>

      <label for="category">
        <select id="category" v-model="category">
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
export default {
  name: 'AddPaymentForm',

  props: {
    categoryList: {
      type: Array,
      default: () => [],
    }
  },

  data: () => ({
    value: '',
    category: '',
    date: '',
    isShow: false,
  }),

  methods: {
    addPayment() {
      const {
        value, category, date, paymentDay,
      } = this

      const data = {
        value,
        category,
        date: date || paymentDay,
      }

      this.$emit('add-payment', data)
      this.isShow = false
      this.resetData()
    },

    onShow() {
      this.isShow = true
    },

    resetData() {
      this.value = ''
      this.category = ''
      this.date = ''
    }
  },

  computed: {
    paymentDay() {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${year}-${month}-${day}`
    },
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

.btnAdd
  width: fit-content

</style>
