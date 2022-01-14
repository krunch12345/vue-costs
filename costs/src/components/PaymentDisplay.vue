<template>
  <div :class="$style.container">
    <div :class="$style.columnsNamesContainer">
      <span v-for="columnName in columnNames" :key="columnName">
        {{ columnName }}
      </span>
    </div>

    <div :class="$style.costs">
      <div :class="$style.cost" v-for="(item, index) in items" :key="index">
        <span>{{ index + 1 }}</span>
        <span>{{ item.date }}</span>
        <span>{{ item.category }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',

  data: () => ({
    columnNames: ["ID", "Date", "Category", "Amount"]
  }),

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },

    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" module>

.container
  display: flex
  justify-content: space-between
  flex-direction: column
  margin: 0 auto
  align-items: center
  padding-bottom: 2rem

.columnsNamesContainer
  display: flex
  justify-content: space-between
  width: 100%
  font-weight: bold

.costs
  padding: 0.5rem 0
  width: 100%

.cost
  display: flex
  justify-content: space-between

.columnsNamesContainer,
.cost
  span
    width: (1140px / 4)
    text-align: center

</style>
