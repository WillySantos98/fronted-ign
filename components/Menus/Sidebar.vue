<template>
    <div>
      <vs-sidebar parent="body" default-index="1"  color="success" class="sidebarx"
                  spacer v-model="activeS">

        <div class="header-sidebar" slot="header">
          <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
        </div>

        <vs-sidebar-item class="link" index="1" icon="label">
          <nuxt-link  to="/">Inicio</nuxt-link>
        </vs-sidebar-item>

<!--        modulo 1-->

        <vs-sidebar-group open title="Sucursales">
          <vs-sidebar-item class="link" index="1" icon="store">
            <nuxt-link  to="/sucursales">Sucursales</nuxt-link>
          </vs-sidebar-item>


          <vs-sidebar-group title="Empleados">
            <vs-sidebar-item index="2.1" icon="store">
              Creación
            </vs-sidebar-item>
            <vs-sidebar-item index="2.2" icon="nature_people">
              Ver Empleados
            </vs-sidebar-item>
            <vs-sidebar-item index="2.3" icon="style">
              Ver Usuarios
            </vs-sidebar-item>
          </vs-sidebar-group>


          <vs-sidebar-item index="2" icon="gavel">
            History
          </vs-sidebar-item>
          <vs-sidebar-item index="3" icon="https">
            Security
          </vs-sidebar-item>
          <vs-sidebar-item index="4" icon="help">
            Help
          </vs-sidebar-item>
        </vs-sidebar-group>

<!--        fin modulo 1-->


        <vs-divider icon="person" position="left">
          User
        </vs-divider>


        <vs-sidebar-item index="6" icon="account_box">
          Profile
        </vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <vs-button icon="settings" color="primary" type="border"></vs-button>
        </div>

      </vs-sidebar>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        computed:{
          activeS: {
            get(){
              return this.$store.state.isSidebar;
            },
            set(){
              this.$store.commit('EstadoActive')
            }
          }
        }
    }
</script>

<style lang="stylus">
  .header-sidebar
    display flex
    align-items center
    justify-content center
    flex-direction column
    width 100%
    h4
      display flex
      align-items center
      justify-content center
      width 100%
      > button
        margin-left 10px
  .footer-sidebar
    display flex
    align-items center
    justify-content space-between
    width 100%
    > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important

</style>
