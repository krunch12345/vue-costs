<template>
  <div :class="$style.container">
    <div :class="$style.columnsNamesContainer">
      <span v-for="columnName in columnNames" :key="columnName">
        {{ columnName }}
      </span>
    </div>

    <div :class="$style.costs">
      <div :class="$style.cost" v-for="(item, index) in paginatedData" :key="index">
        <span>{{ index + 1 }}</span>
        <span>{{ item.date }}</span>
        <span>{{ item.category }}</span>
        <span>{{ item.value }}</span>
      </div>
    </div>

    <ul :class="$style.pagination" v-if="items.length > 5 || currentPage > 1">
      <li :class="$style.paginationItem" title="Первая страница">
        <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
          &#60;&#60;
        </button>
      </li>

      <li :class="$style.paginationItem" title="Предыдущая страница">
        <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
          &#60;
        </button>
      </li>

      <li :class="$style.paginationItem" v-for="(page, index) in pages" :key="index">
        <button
            type="button"
            @click="onClickPage(page.number)"
            :disabled="page.isDisabled"
            :class="isPageActive(page.number) ? $style.active : null"
        >
          {{ page.number }}
        </button>
      </li>

      <li :class="$style.paginationItem" title="Следующая страница">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          &#62;
        </button>
      </li>
      <li :class="$style.paginationItem" title="Последняя страница">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          &#62;&#62;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',

  data: () => ({
    columnNames: ['ID', 'Date', 'Category', 'Amount']
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

    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 10
    },

    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },

  computed: {
    paginatedData(){
      let start = (this.currentPage - 1) * this.perPage,
          end = start + this.perPage
      return this.items.slice(start, end)
    },

    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons - 2)
      }

      return this.currentPage - 1
    },

    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },

    pages() {
      let range = []
      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage
        });
      }
      return range
    },

    isInFirstPage() { return this.currentPage === 1 },

    isInLastPage() { return this.currentPage === this.totalPages },
  },

  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },

    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },

    onClickPage(page) {
      this.$emit('pagechanged', page)
    },

    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },

    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },

    isPageActive(page) {
      return this.currentPage === page
    },

    onPageChange(page) {
      this.currentPage = page;
    }
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
  min-height: 10rem
  width: 100%

.cost
  display: flex
  justify-content: space-between

.columnsNamesContainer,
.cost
  span
    width: (1140px / 4)
    text-align: center

.pagination
  display: flex
  justify-content: center
  padding: 0
  margin: auto 0 0 0
  list-style-type: none

.paginationItem
  button
    margin: 0!important
    padding: .25rem .5rem
    font-size: 1.1rem
    border: none
    border-radius: .25rem
    background: none
    &:hover
      cursor: pointer
      background-color: silver
    &[disabled="disabled"]
      color: silver
      cursor: default
      &:hover
        cursor: default
        background-color: transparent
    &.active
      color: darkgreen
      font-weight: bold

</style>
