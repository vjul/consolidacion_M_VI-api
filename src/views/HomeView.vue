<template>
  <div class="container">
    <h1 class="text-center">Lista de juegos disponibles</h1>
    <div class="d-flex justify-content-center mt-5">
      <button
        class="btn btn-primary"
        @click="getAllGames(next)"
        :disabled="next == null || next == ''"
      >
        Cargar más juegos
      </button>
    </div>
    <div class="row">
      <div v-for="game in games" :key="game.id" class="col-md-4">
        <div>
          <CardComponent :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";

export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      games: [],
      next: "",
    };
  },
  components: { CardComponent },
  methods: {
    getAllGames(url) {
      axios
        .get(url)
        .then((response) => {
          this.games = [...this.games, ...response.data.results];
          this.next = response.data.next;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllGames(
      `https://api.rawg.io/api/games?key=${process.env.VUE_APP_API_KEY}`
    );
  },
});
</script>
