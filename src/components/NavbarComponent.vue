<template>
  <div class="ms-auto">
    <b-nav class="bg-secondary-subtle py-3">
        <router-link class="ms-3 link" to="/">Home</router-link>
    </b-nav>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style scoped>
.link{
    text-decoration: none;
}
</style>