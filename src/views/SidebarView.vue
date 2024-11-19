<template>
  <div>
    <div class="sidebar">
      <h2>Bienvenid@</h2>
      <h4>{{ nombre }} {{ apellido }}</h4>
    </div>
    <div class="text-center">
      <h2>Resumen de tu cuenta</h2>
      <h4>
        Le diste me gusta al juego <strong>{{ gameName }}</strong>
      </h4>
      <br />
      <div>
        <p>¿Deseas comprar coins para este juego?</p>
        <br />
        <button
          class="btn btn-warning"
          @click="coins += 5"
          :disabled="coins >= 50"
        >
          Agregar coins
        </button>
        <br />
        <h5 class="mt-5">Cantidad de coins comprados</h5>
        <div class="container mt-2 ms-auto w-50">
          <div class="progress">
            <div
              :class="
                coins <= 20
                  ? 'progress-bar bg-success'
                  : coins <= 30
                  ? 'progress-bar bg-warning'
                  : 'progress-bar bg-danger'
              "
              role="progressbar"
              :style="`width: ${coins}%`"
              aria-valuenow="coins"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ coins }}%
            </div>
          </div>
          <div v-if="coins >= 50">
            <p>Llegaste al máximo de tu crédito</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="container row d-flex justify-content-end align-content-end">
          <div class="text-start col-md-4 bg-warning w-25 div-final">
            <br />
            <br />
            <h5>% de finalización de juego</h5>
            <h5>17%</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
              />
            </svg>
          </div>
          <div class="text-start col-md-4 bg-success w-25 div-final text-white">
            <br />
            <br />
            <h5>Logros en el juego</h5>
            <h5>166</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-trophy"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"
              />
            </svg>
          </div>
          <div class="text-start col-md-4 bg-info w-25 div-final">
            <br />
            <br />
            <h5>Recompensas</h5>
            <h5>200</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-award"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"
              />
              <path
                d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "SidebarView",
  data() {
    return {
      coins: 0,
    };
  },
  props: {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
  },
  created() {
    this.gameName = this.$route.params.gameName;
  },
});
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
}

.sidebar h2,
h4 {
  text-align: center;
  margin-bottom: 20px;
}

.div-final {
  height: 10rem;
}
</style>
