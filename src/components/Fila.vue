<template>
      <tr >  
       <td>{{alumno.nombreDeUsuario}}</td>
       <td>{{alumno.email}}</td>
       <td>{{alumno.direccion}}</td>
       <td>{{alumno.telefono}}</td>
       <td>{{alumno.password}}</td>
      <td><Boton  class="btn btn-primary mr-2" @onClick='obtenerClick' texto='editar'/>
      <Boton class="btn btn-danger" @onClick='obtenerClick' texto='eliminar'/></td>
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
        obtenerClick(e){
            this.$emit('onClick', {alumno:this.alumno, nombre:e.nombre})
        
        }
    }
    }

</script>





