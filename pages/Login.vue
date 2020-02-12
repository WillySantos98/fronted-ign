<template>
  <div>
    <div id="Estilo1"></div>
    <div id="Estilo2"></div>
    <div id="LetraI">
      <h1><strong>I</strong></h1>
    </div>
    <div id="LetraG">
      <h1><strong>G</strong></h1>
    </div>
    <div id="LetraN">
      <h1><strong>N</strong></h1>
    </div>
    <div id="Concepto">
      <h6><strong>Interfaz Gerencial para Negocios</strong></h6>
    </div>
    <div id="SL">
      <h6><strong>Surtidora Laínez</strong></h6>
    </div>
    <div class="container">
      <div class="row" id="Tarjeta">
        <div>
          <vs-card>
            <div slot="header">
              <div class="row">
                <div class="col-sm-9">
                  <h3 class="text-center"><strong>Surtidora Lainez</strong></h3>
                </div>
                <div class="col-sm-3">
                  <h4 class="text-center">IGN</h4>
                </div>
              </div>
            </div>
            <div>
              <div class="row Cuerpo">
                <div class="col">
                  <h4 class="text-center">Inicio de Sesión</h4>
                </div>
              </div>
              <div class="row Cuerpo">
                <div class="col">
                  <vs-input icon-after="true"
                            label-placeholder="icon-after"
                            icon="account_circle" type="email"
                            placeholder="Usuario" v-model="usuario"/>
                </div>
                <div class="col">
                  <vs-input icon-after="true"
                            label-placeholder="icon-after" type="password"
                            placeholder="Contraseña" v-model="password"/>
                </div>
              </div>
            </div>
            <div slot="footer" class="footer">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-end">
                    <vs-button :icon-after="true" color="success"
                               @click="login"
                               type="gradient" icon="arrow_right_alt">Iniciar Sesión</vs-button>
                  </div>
                </div>
              </div>
            </div>
          </vs-card>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import qs from 'qs';
  import LogoInicial from "../components/LogoInicial";
  export default {
    name: "Login",
    components:{
      LogoInicial
    },
    data(){
      return{
        usuario: '',
        password: ''
      }
    },
    methods:{
      login(){
        return this.$axios({
          method: 'post',
          url: '/auth/login',
          data: qs.stringify({
            email: this.usuario,
            password: this.password
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then( res => {
            if(res.data.access_token){
              this.$store.commit("guardarToken", res.data.access_token);
              this.$store.commit("guardarUsuario", res.data.user.usuario);
              this.usuario = '';
              this.password = '';
              this.$store.commit("CambiarDirectorio", 'Inicio');
              this.$store.commit("CambiariconoDirectorio", 'label');
              this.$router.replace({path:"/"})
            }
          }
        ).catch(error =>{
          alert(Object.values(error.response.data))
        })
      },
    }
  }
</script>

<style lang="stylus">
  .container
    display flex
    justify-content center
    align-items center
    position relative
    overflow hidden
  #Tarjeta
    margin-top 200px
    width 40%
    background-color white
  .Cuerpo
    margin-top 25px
  .footer
    margin-top 30px
  #Estilo1
    background-color #02FA95
    width 100%
    height 422px
    position absolute
    top 0px
  #Estilo2
    background-color #2F3751
    width 100%
    height 422px
    position absolute
    top 300px
  #LetraI
    display flex
    justify-content center
    background-color #2F3751
    width 100px
    height 100px
    position absolute
    top 10px
    left 10px
    animation-duration 2s
    animation-name slide-in
    animation-iteration-count: 1;
    overflow hidden
    h1
      color white
      font-size 80px
  #LetraG
    display flex
    justify-content center
    background-color #2F3751
    width 100px
    height 100px
    position absolute
    top 10px
    left 120px
    animation-duration 2s
    animation-name slide-in
    animation-iteration-count: 1;
    overflow hidden
    h1
      color white
      font-size 80px
  #LetraN
    display flex
    justify-content center
    background-color #2F3751
    width 100px
    height 100px
    position absolute
    top 10px
    left 230px
    animation-duration 2s
    animation-name slide-in
    animation-iteration-count: 1;
    overflow hidden
    h1
      color white
      font-size 80px
  #Concepto
    position absolute
    top 120px
    left 15px
    animation-duration 3s
    animation-name slide-in
    animation-iteration-count: 1;
    h6
      color white
      font-size 20px
  #SL
    position absolute
    top 680px
    left 1350px
    h6
      color white
      font-size 20px
  @keyframes slide-in
    from
      margin-left 90%
      width 50%
    to
      margin-left 0%
      width 100px
</style>
