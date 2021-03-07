<template>
<div class="form">
    <form  action="">
        <input v-model="nombreDeUsuario" type="text">
        <input type="text">
        <input type="text">
        <input type="text">
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
    texto:String,
    

},
data(){
    return{
        alumnoSeleccionado:{},
        nombreDeUsuario:''
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
    
    mounted(){
        this.$root.$on('onClick', (resp)=>{
            this.alumnoSeleccionado= resp.alumno;
            this.nombreDeUsuario= this.alumnoSeleccionado.nombreDeUsuario
       console.log(resp)

   })
        console.log(this.alumnoSeleccionado);
    }
}

</script>