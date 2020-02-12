<template>
  <div class="container">
    <h6>Cuando el usuario inicio sesion ya</h6>
  </div>
</template>

<script>
export default {
  fetch({ store, redirect}){
    if(!store.state.token){
      return redirect('/login')
    }
  },
  mounted() {
    this.$store.commit("CambiarDirectorio", 'Inicio');
    this.$store.commit("CambiariconoDirectorio", 'label');
  }
}
</script>

<style>

</style>
