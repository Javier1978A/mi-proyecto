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
  <tbody>
    <Fila v-for="alumno in alumnos" v-bind:key="alumno._id" 
    :alumno="alumno" 
    @onClick='obtenerClick'/>
</tbody>

</div>
</template>

<script>
import Fila from './Fila';
import Boton from './Boton'

export default {
    name:'Tabla',
    components: {
        Fila,
        Boton
    },
    props: {
    alumnos:{
      type:Array,
    }
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
    
  }
}
    
</script>

