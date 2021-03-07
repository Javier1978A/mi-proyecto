<template>
      <tr >  
       <td>{{alumno._id}}</td>
       <td>{{alumno.nombreDeUsuario}}</td>
      <td>{{alumno.email}}</td>
      <td></td>
      <td><Boton @onClick='obtenerClick' texto='editar'/></td>
      <td><Boton @onClick='obtenerClick' texto='eliminar'/></td>
    </tr>
</template>
<script>

import Boton from './Boton';
export default {
    name:'Fila',
    props:{
        alumno:{
            type:Object
        }
    },
    components:{
        Boton
    },
    methods:{
        obtenerClick(){
            this.$emit('onClick', {alumno:this.alumno, opcion:1})
        
        }
    }
    }

</script>





/* v-for="alumno in alumnos" v-bind:key="alumnos.id" */