<template>
  <v-card class="text-left pa-8">
    <v-date-picker v-model="date" label="Date"/>

    <v-select
        v-model="category"
        label="Category"
        :items="categoryList"
    />

    <v-text-field v-model.number="value" label="Value" type="number"/>

    <v-btn
        @click="addPayment"
        :disabled="!category || !value"
    >
      Add
    </v-btn>
  </v-card>
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

</style>
