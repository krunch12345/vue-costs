<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-5">My personal costs</div>

        <v-dialog v-model="showModal">
          <template v-slot:activator="{ on }">
            <v-btn
                color="primary"
                v-on="on"
                @click="showModal = !showModal"
                class="mb-5"
            >
              Add new payment
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <AddPayment />
          </v-card>
        </v-dialog>

        <div class="mb-5">
          Total: {{ paymentsListTotalAmount }}
        </div>

        <div>
          <PaymentDisplay
              :items="paymentsList"
              :total-pages="Math.ceil(paymentsList.length / 4)"
              :total="paymentsList.length"
              :per-page="4"
              :current-page="currentPage"
              @pagechanged="onPageChange"
          />
        </div>
      </v-col>

      <v-col>
        Charts
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaymentDisplay from '../components/PaymentDisplay.vue'
import AddPayment from '../components/AddPayment';

export default {
  name: 'DashboardPage',

  components: {
    AddPayment,
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

</style>