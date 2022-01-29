<template>
  <v-container>
    <v-container>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa cupiditate dicta, ducimus hic, impedit in porro veniam vero, vitae voluptates voluptatum. Alias atque cupiditate debitis, dolorem dolorum ea eaque excepturi laudantium maxime nemo nihil nobis non numquam odit omnis perferendis provident quibusdam quos recusandae, reiciendis rem repellat ullam vel vitae voluptatum? Aliquid aspernatur, assumenda beatae, cupiditate debitis impedit incidunt non placeat sed ullam ut vitae? Accusamus blanditiis consequatur corporis cupiditate dolorem doloribus ducimus earum eos eveniet facere hic id laborum modi molestiae nam nulla officiis optio porro praesentium provident quae quidem repellendus sed, sequi tempora temporibus ullam voluptates?</v-container>

    <v-dialog v-model="showModal">
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          v-on="on"
          @click="showModal = !showModal"
          class="mb-5"
        >
          Open Auth
        </v-btn>
      </template>

      <v-card>
        <Auth />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Auth from '../components/Auth';

export default {
  name: 'AboutPage',

  components: {
    Auth,
  },

  data: () => ({
    showModal: false,
  }),

  methods: {
    authModalOpen() {
      this.$modal.show({
        title: 'Authorization',
        content: 'AuthComp',
      })
    },
  },
}
</script>

<style scoped>

</style>
