<template>
    <div class="container text-center">
        <h1>404 - Pagina no encontrada</h1>
        <p>La pagina que buscas no se encontró</p>
        <button class="btn btn-primary" @click="$router.push('/')">Home</button>
    </div>
</template>

<script>
    import Vue from "vue"
    export default Vue.extend({
      name:"NotFoundView",  
    })
</script>

<style lang="scss" scoped>

</style>