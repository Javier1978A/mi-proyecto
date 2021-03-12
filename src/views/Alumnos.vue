<template>
  <div>
    <Tabla
      @onClick="obtenerFila"
      :alumnos="alumnos"
      @clickParaFila="agregar"
    />
    <Formulario
      v-if="mostrar"
      @OnClick="actualizarDatos"
      :alumnoSeleccionado="alumnoSeleccionado"
    />
    <progress-bar
      :options="options"
      :value="value"
      />
  </div>
</template>

<script>
import Tabla from "../components/Tabla";
import Formulario from "../components/Formulario";

export default {
  name: "Alumnos",
  components: {
    Tabla,
    Formulario,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      alumnos: [],
      alumnoSeleccionado: {},
      mostrar: false,
      opcion:1
    };
  },
  methods: {
    traerDatos() {
      fetch(" https://phs-class-api.herokuapp.com/usuario", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((r) => {
        r.json().then((data) => {
          this.alumnos = data.result;
          console.log(data);
        });
      });
    },
    eliminarDatos(_id) {
      fetch(" https://phs-class-api.herokuapp.com/usuario/" + _id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((r) => {
        r.json().then((data) => {
          console.log(data);
          this.traerDatos();
        });
      });
    },
    modificarAlumno(_id, alumnoModificado) {
      let _this = this;
      fetch("https://phs-class-api.herokuapp.com/usuario/" + _id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alumnoModificado),
      }).then(function () {
        _this.traerDatos();
      });
    },
    insertarAlumno(data) {
      let _this = this;
      fetch("https://phs-class-api.herokuapp.com/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(function (r) {
        r.json().then(function () {
          _this.traerDatos();
        });
      });
    },

    obtenerFila(e) {
      this.alumnoSeleccionado = e.alumno;

      if (e.nombre == "editar") {
        this.mostrar = true;
        this.opcion=1
      } else {
        this.eliminarDatos(this.alumnoSeleccionado._id);
      }
    },
    actualizarDatos(e) {
      if (this.opcion == 1) {
        this.modificarAlumno(this.alumnoSeleccionado._id, e.alumno);
      }else if (this.opcion ==2){
        /* let usuario={ nombreDeUsuario:'Sofi', email:'sofi@gmail.com', password:'tsgsve'} */
        //en lugar de usuario paso e.alumno
              console.log(e.alumno)
              this.insertarAlumno(e.alumno);
      } 
      else if(e.nombre== 'Cancelar') {
        this.mostrar = false;
      }
    },
    agregar(){
        this.opcion=2;
        this.mostrar=true;
    }
  },
  mounted() {
    this.traerDatos();
    console.log(this.$router);
  },
};
</script>
<style scoped>
options text: {
    color: '#FFFFFF',
    shadowEnable: true,
    shadowColor: '#000000',
    fontSize: 14,
    fontFamily: 'Helvetica',
    dynamicPosition: false,
    hideText: false
  },
  progress: {
    color: '#2dbd2d',
    backgroundColor: '#C0C0C0'
  },
  layout: {
    height: 35,
    width: 140,
    verticalTextAlign: 61,
    horizontalTextAlign: 43,
    zeroOffset: 0,
    strokeWidth: 30,
    progressPadding: 0,
    type: 'line'
  }
}
</style>