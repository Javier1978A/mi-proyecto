<template>
    <div>
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Ciudad</th>
      <th>N de Alumno</th>
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

export default {
    name:'Tabla',
    components: {
        Fila,
        
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
          console.log(e);
      }
  },
  mounted(){
    
  }
}
    
</script>

