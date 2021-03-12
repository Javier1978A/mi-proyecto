<template>
    <div>
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
      <th>N de Alumno</th>
      <th><Boton  class="btn btn-dark" @onClick='hizoClickAgregar' texto='Agregar Alumno'/></th>
    </tr>
  </thead>
  <ProgressBar v-if='loading'/>
  <tbody v-if='!loading'> 

    <Fila v-for="alumno in alumnos" v-bind:key="alumno._id" 
    :alumno="alumno" 
    @onClick='obtenerClick'/>
</tbody>

</div>
</template>

<script>
import Fila from './Fila';
import Boton from './Boton'
import ProgressBar from './ProgressBar'
export default {
    name:'Tabla',
    components: {
        Fila,
        Boton,
        ProgressBar
    },
    props: {
    alumnos:{
      type:Array,
    },
    loading:Boolean
    },
    data (){
    return{
     
      
    }
  },
  methods:{
    
      obtenerClick(e){
         this.$emit('onClick',{alumno:e.alumno, nombre:e.nombre})  
      },
      hizoClickAgregar(){
        this.$emit('clickParaFila')
        
      }
      
  },
  mounted(){
    if(this.alumnos){
      this.loading=false
    }
  }
}
    
</script>

