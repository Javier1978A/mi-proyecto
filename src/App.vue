<template>
  <div id="app">
    
      <NavBar @onShow='ocultarForm' />
    <router-view/>
  <div v-if ="ocultar">
    <Formulario  :alumnoSeleccionado='alumnoSeleccionado' @OnClick='ocultarForm'/>

  </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar';
import Formulario from './components/Formulario';

export default {
 components:{
   NavBar,
   Formulario
   
 },
 data(){
   return {
     ocultar:true,
     alumnoSeleccionado:{}
     
   }
  
 },
 mounted(){
   this.$root.$on('onClick', (resp)=>{
            if(resp.opcion ==1){
              this.ocultar= !this.ocultar
            }
       console.log(resp.alumno)

   })
   

 },
 methods:{
   ocultarForm(e){
  this.ocultar = e
   }
   },
 }


</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
