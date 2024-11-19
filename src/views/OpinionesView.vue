<template>
  <div>
    <h4 class="text-center">
      Escribe tu opinión para el juego: <strong>{{ game.name }}</strong>
    </h4>
    <div class="container">
      <b-form @submit.prevent="guardarOpinion">
        <b-form-group
          class="mt-3"
          id="input-group-1"
          label="Nombre"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Nombre"
            v-model="newOpinion.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mt-3"
          id="input-group-1"
          label="Opinión"
          label-for="textarea"
        >
          <b-form-textarea
            id="textarea"
            placeholder="Tu opinión debe ir aquí"
            rows="3"
            max-rows="6"
            v-model="newOpinion.opinion"
          ></b-form-textarea
        ></b-form-group>

        <b-button
          class="mt-3"
          type="submit"
          :variant="isEditing ? 'info' : 'primary'"
          >{{ isEditing ? "Actualizar" : "Agregar" }}</b-button
        >
      </b-form>
    </div>
    <h4 class="text-center mt-3">A continuación podrás ver tu opinión</h4>
    <div
      class="container bg-danger-subtle"
      v-if="opiniones == null || opiniones.length == 0"
    >
      <p class="py-3 text-danger">No existen opiniones para mostrar</p>
    </div>
    <div v-else>
      <div
        class="container text-center mt-3"
        v-for="opinion in opiniones"
        :key="opinion.id"
      >
        <CardOpinionComponent
          :opinion="opinion"
          @delete="deleteOpinion"
          @edit="editOpinion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import CardOpinionComponent from "@/components/CardOpinionComponent.vue";
export default Vue.extend({
  name: "OpinionesView",
  data() {
    return {
      game: null,
      opiniones: [],
      newOpinion: {
        id: "",
        name: "",
        opinion: "",
      },
      nombre: "",
      isEditing: false,
      index: -1,
    };
  },
  components: {
    CardOpinionComponent,
  },
  methods: {
    getGameById() {
      axios
        .get(
          `https://api.rawg.io/api/games/${this.id}?key=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          this.game = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/notFound");
        });
    },
    guardarOpinion() {
      if (this.isEditing && this.index > -1) {
        this.opiniones.splice(this.index, 1, { ...this.newOpinion });
        this.isEditing = false;
      } else {
        this.newOpinion.id = Date.now();
        this.opiniones.push(this.newOpinion);
      }

      localStorage.setItem(this.id, JSON.stringify(this.opiniones));
      this.newOpinion = {};
    },
    deleteOpinion(opinion) {
      this.opiniones = this.opiniones.filter((item) => item.id !== opinion.id);
      localStorage.setItem(this.id, JSON.stringify(this.opiniones));
    },
    editOpinion(opinion) {
      this.index = this.opiniones.findIndex((item) => item.id == opinion.id);
      this.newOpinion = { ...this.opiniones[this.index] };
      this.isEditing = true;
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getGameById();
    const infoLocal = localStorage.getItem(this.id);
    if (infoLocal) {
      this.opiniones = JSON.parse(infoLocal);
    }
  },
});
</script>

<style lang="scss" scoped>
</style>