<template>
<div class="form">
    <form  action="">
        <input v-model="nombreDeUsuario" type="text">
        <input v-model="email" type="text">
        <input v-model="direccion" type="text">
        <input v-model="telefono" type="text">
        <Boton  texto='Agregar'/>
        <Boton  @onClick ="ocultarForm" texto='Cancelar'/>
    </form>
</div>
</template>
<script>
import Boton from './Boton';
export default {
    name:'Formulario',
    props:{
    alumnoSeleccionado:{}
       

},
data(){
    return{
        
        nombreDeUsuario:this.alumnoSeleccionado.nombreDeUsuario,
        email:this.alumnoSeleccionado.email,
        direccion:this.alumnoSeleccionado.direccion,
        telefono:this.alumnoSeleccionado.telefono

    }
},
components:{
        Boton
    },
    methods:{
ocultarForm(){
    this.$emit('OnClick', true)
}
    },
    
         
    
}

</script>