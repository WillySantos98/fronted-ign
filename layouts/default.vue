<template>
  <div>
    <div v-if="user" id="Nav">
      <div id="section1">
        <NavBar/>
      </div>
      <Sidebar/>
      <div id="SubSection1">
        <div class="d-flex justify-content-start align-items-center">
          <h6><strong><vs-icon :icon="iconoDir"></vs-icon></strong></h6>
          <h6 class="dir"><strong>{{directorios}}</strong></h6>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
  import NavBar from '../components/Menus/Nav';
  import Sidebar from "../components/Menus/Sidebar";
export default {
  components:{
    NavBar,
    Sidebar
  },
  computed:{
    user: function () {
      return this.$store.state.usuario;
    },
    directorios: function () {
      return this.$store.state.directorio
    },
    iconoDir: function () {
      return this.$store.state.iconoDirectorio
    }
  }
}
</script>

<style lang="stylus">
#Nav
  width 100%
  height 110px
#section1
  width 100%
  height 300px
  background-color rgb(23, 201, 100)
  opacity 0.8
#SubSection1
  width 100%
  height 40px
  position absolute
  top 85px
  div
    margin-left 265px
    h6
      color white
      font-size 14px
    .dir
      margin-left 10px

</style>

