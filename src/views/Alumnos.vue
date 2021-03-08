<template>
    <div>
    <Tabla @onClick='obtenerFila' :alumnos='alumnos'/>
    <Formulario v-if="mostrar" @OnClick='actualizarDatos' :alumnoSeleccionado='alumnoSeleccionado'/>
    
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
      modificarAlumno(_id, alumnoModificado){
        let _this= this;
fetch("https://phs-class-api.herokuapp.com/usuario/" +_id,{
  'method': 'PUT', 
  'headers':  {
      'Content-Type': 'application/json'
  },
  'body': JSON.stringify(alumnoModificado)
}).then(function (){
  _this.traerDatos(); 	
  
})

  
      },
      obtenerFila(e){
        this.alumnoSeleccionado=e.alumno;
          
        if(e.nombre == 'editar'){
         this.mostrar=true;
          
        }else{
          this.eliminarDatos(this.alumnoSeleccionado._id); 
        }
      },
      actualizarDatos(e){
        console.log(e)
if(e.nombre == 'Agregar'){
  this.modificarAlumno(this.alumnoSeleccionado._id, e.alumno);
}else{
  this.mostrar=false;
}
}
  },
  mounted(){
    this.traerDatos();
    console.log(this.$router)
  }
}
    
</script>