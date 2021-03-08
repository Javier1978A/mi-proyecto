<template>
    <div>
    <Tabla @onClick='obtenerFila' :alumnos='alumnos'/>
    <Formulario v-if="mostrar" :alumnoSeleccionado='alumnoSeleccionado'/>
    
</div>
</template>

<script>
import Tabla from '../components/Tabla';
import Formulario from '../components/Formulario';

export default {
    name:'Alumnos',
    components: {
        Tabla,
        Formulario
    },
    props: {
    msg: String
    },
    data (){
    return{
      alumnos:[],
      alumnoSeleccionado:{},
      mostrar: false

    }
  },
  methods:{
    traerDatos(){
      fetch(" https://phs-class-api.herokuapp.com/usuario",{
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
    }).then((r)=>{
        r.json().then(
            (data)=>{
                this.alumnos= data.result
                console.log(data);
                
        }
        )
    });

      },
      eliminarDatos(_id){
      fetch(" https://phs-class-api.herokuapp.com/usuario/" + _id,{
    method:"DELETE",
    headers:{
        "Content-Type": "application/json"
    },
    }).then((r)=>{
        r.json().then(
            (data)=>{
                console.log(data);
                this.traerDatos();
                
        }
        )
    });
      },
      obtenerFila(e){
        this.alumnoSeleccionado=e.alumno;
          console.log(this.alumnoSeleccionado)
        if(e.nombre == 'editar'){
         this.mostrar=true;
          
        }else{
          this.eliminarDatos(this.alumnoSeleccionado._id); 
        }
      }
  },
  mounted(){
    this.traerDatos();
    console.log(this.$router)
  }
}
    
</script>