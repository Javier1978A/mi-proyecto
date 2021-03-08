<template>
<div class="form">
    <form  action="">
        <input v-model="nombreDeUsuario" type="text">
        <input v-model="email" type="text">
        <input v-model="direccion" type="text">
        <input v-model="telefono" type="text">
        <Boton  @onClick ="enviarEvento" texto='Agregar'/>
        <Boton  @onClick ="enviarEvento" texto='Cancelar'/>
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
        telefono:this.alumnoSeleccionado.telefono,
        alumnoModificado:{}

    }
},
components:{
        Boton
    },
    methods:{
enviarEvento(e){
    let alumnSeleccionado={nombreDeUsuario:this.nombreDeUsuario,
        email:this.email,
        direccion:this.direccion,
        telefono:this.telefono}
    this.$emit('OnClick', {alumno:alumnSeleccionado, nombre:e.nombre})
}
    },
    
         
    
}

</script>