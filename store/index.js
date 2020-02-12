export const state = () => ({
  token: null,
  usuario: null,
  isSidebar:false,
  directorio: null,
  iconoDirectorio: null
});

export const mutations = {
  guardarUsuario(state, usuario){
    state.usuario = usuario
  },
  guardarToken(state, token){
    state.token = token
  },
  EstadoActive(state){
    state.isSidebar = !state.isSidebar;
  },
  CambiarDirectorio(state, direc){
    state.directorio = direc
  },
  CambiariconoDirectorio(state, icon){
    state.iconoDirectorio = icon
  }
};
