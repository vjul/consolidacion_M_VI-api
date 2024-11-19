<template>
  <div>
    <h4 class="text-center">Para ver la información ingresa tus datos</h4>
    <div class="d-flex justify-content-center mt-5">
      <button class="btn btn-success" @click="ingresarDatos">
        Ingresar datos
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "AdminView",
  data() {
    return {
      nombre: "",
      apellido: "",
    };
  },
  components: {},
  methods: {
    ingresarDatos() {
      this.nombre = prompt("Ingrese nombre");
      this.apellido = prompt("Ingrese apellido");
      this.$router.push({
        name: "sidebar",
        params: {
          nombre: this.nombre,
          apellido: this.apellido,
          gameName: this.gameName,
        },
      });
    },
  },
  created() {
    this.gameName = this.$route.params.gameName;
  },
});
</script>

<style lang="scss" scoped>
</style>