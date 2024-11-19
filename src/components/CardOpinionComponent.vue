<template>
  <div>
    <b-card
      :title="opinion.name"
      tag="article"
      style="max-width: 80rem"
      class="mb-2"
    >
      <b-card-text>
        {{ opinion.opinion }}
      </b-card-text>
      <button class="btn btn-danger me-3" @click="$emit('delete', opinion)">
        Eliminar
      </button>
      <button class="btn btn-warning" @click="$emit('edit', opinion)">
        Editar
      </button>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardOpinionComponent",
  props: {
    opinion: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>