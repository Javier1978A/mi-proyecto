<template>
<div class="form">
    <form  action="">
        <input v-model="nombreDeUsuario" type="text">
        <input v-model="email" type="text">
        <input v-model="direccion" type="text">
        <input v-model="telefono" type="text">
        <input v-model="password" type="text">
        <Boton class="btn btn-outline-success" @onClick ="enviarEvento" texto='Aceptar'/>
        <Boton class="btn btn-outline-danger" @onClick ="enviarEvento" texto='Cancelar'/>
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
        password:this.alumnoSeleccionado.password,
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
        telefono:this.telefono, 
        password:this.password}
    this.$emit('OnClick', {alumno:alumnSeleccionado, nombre:e.nombre})
}
    },
    
         
    
}

</script>