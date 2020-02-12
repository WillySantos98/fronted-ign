<template>
  <div>
    <!--      componente del navbar-->
    <vs-navbar class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <vs-button class="text-white btnSidebar"
                     @click="$store.commit('EstadoActive')" color="dark" type="line" icon="menu"></vs-button>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
            <!--              dropdown-->
            <vs-dropdown  >
              <a href.prevent>
                <div class="d-flex justify-content-center align-items-center text-white">
                  <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
                  <strong>{{user}}</strong>
                </div>
              </a>
              <vs-dropdown-menu id="DropdownSalir">
                <vs-dropdown-item>
                  <div class="d-flex" @click="logout">
                    Cerrar Sesión
                    <vs-icon class="" icon="exit_to_app"></vs-icon>
                  </div>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
      </vs-navbar-item>
    </vs-navbar>

    <!--      fin del componente navbar-->
  </div>
</template>

<script>
  export default {
    computed:{
      user: function () {
        return this.$store.state.usuario;
      }
    },
    methods:{
      logout: function () {
        this.$axios.$post('/auth/logout',{
          token: this.$store.state.token
        }).then( res=> {
          this.$store.commit("guardarToken", null);
          this.$store.commit("guardarUsuario", null);
          this.$router.replace({path:"/login"})
        } )
      }
    }
  }
</script>

<style lang="stylus">
  .nabarx
    padding-right 15px
    opacity 1
    background-color #F43E08
    box-shadow 0px 0px 0px #F43E08 !important
  #DropdownSalir
    width 150px
  .btnSidebar
    box-shadow 0px 0px 0px white !important
</style>
