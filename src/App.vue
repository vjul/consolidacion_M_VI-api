<template>
  <div id="app">
    <NavbarComponent/>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import NavbarComponent from "@/components/NavbarComponent.vue"
export default Vue.extend({
  name: "App",
  components: {
    NavbarComponent,
  },
});
</script>

<style>
</style>
