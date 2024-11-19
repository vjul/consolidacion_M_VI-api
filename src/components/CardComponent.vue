<template>
  <div class="mt-3">
    <b-card
      :title="game.name"
      :img-src="game.background_image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <p>Rating: {{ game.rating }}</p>
        <p>Released: {{ game.released }}</p>
        <p>Update: {{ game.updated }}</p>
      </b-card-text>
      <b-button
        class="btn btn-primary" variant="primary"
        @click="$router.push(`/opiniones/${game.id}`)"
      >
        Opinar </b-button
      ><span
        class="ms-3"
        style="cursor: pointer"
        @click="$router.push(`/admin/${game.name}`)"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          /></svg
      ></span>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardComponent",
  components: {},
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>