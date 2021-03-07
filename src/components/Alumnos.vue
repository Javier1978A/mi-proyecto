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
    name:'Alumnos',
    components: {
        Fila,
        
    },
    props: {
    msg: String
    },
    data (){
    return{
      alumnos:[],
      alumnoSeleccionado:[]
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

      obtenerClick(e){
         this.$root.$emit('onClick',{alumno:this.alumnoSeleccionado})
          console.log(e);
      }
  },
  mounted(){
    this.traerDatos();
    console.log(this.$router)
  }
}
    
</script>

