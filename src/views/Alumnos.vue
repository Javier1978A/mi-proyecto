<template>
  <div>
    <Tabla
      class="table table-striped container"
      @onClick="obtenerFila"
      :alumnos="alumnos"
      @clickParaFila="agregar"
      :loading="loading"
      :value="value"
    />
    <Formulario
      v-if="mostrar"
      @OnClick="actualizarDatos"
      v-bind:alumnoSeleccionado="alumnoSeleccionado"
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
      opcion: 1,
      loading: false,
      value: 0,
    };
  },

  methods: {
    traerDatos() {
      this.loading = true;
      this.mostrar = false;
      this.incrementValue();
      fetch("https://phs-class-api.herokuapp.com/alumno?numeroGrupo=1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((r) => {
        r.json().then((data) => {
          setTimeout(() => {
            this.alumnos = data.resultado;
            this.loading = false;
          }, 2000);
        });
      });
      this.value = 0;
    },
    eliminarDatos(_id) {
      fetch(
        "https://phs-class-api.herokuapp.com/alumno/" + _id + "/?numeroGrupo=1",

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((r) => {
        r.json().then((data) => {
          console.log(data);
          this.traerDatos();
        });
      });
    },
    modificarAlumno(_id, alumnoModificado) {
      let _this = this;
      fetch(
        "https://phs-class-api.herokuapp.com/alumno/" + _id + "/?numeroGrupo=1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(alumnoModificado),
        }
      ).then(function () {
        _this.traerDatos();
      });
    },
    insertarAlumno(data) {
      let _this = this;
      fetch("https://phs-class-api.herokuapp.com/alumno?numeroGrupo=1", {
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
      this.mostrar = false;

      if (e.nombre == "editar") {
        setTimeout(() => {
          this.alumnoSeleccionado = e.alumno;
          this.mostrar = true;
          this.opcion = 1;
        }, 100);
      } else {
        this.eliminarDatos(e.alumno._id);
      }
    },

    actualizarDatos(e) {
      if (this.opcion == 1 && e.nombre != "Cancelar") {
        this.modificarAlumno(this.alumnoSeleccionado._id, e.alumno);
      } else if (this.opcion == 2 && e.nombre != "Cancelar") {
        this.insertarAlumno(e.alumno);
      }
      if (e.nombre == "Cancelar") {
        this.mostrar = false;
      }
    },
    agregar() {
      this.opcion = 2;
      this.mostrar = true;
    },
    incrementValue() {
      setInterval(() => {
        if (this.value < 100) {
          this.value++;
          /* console.log(this.value); */
        }
      }, 10);
    },
  },
  mounted() {
    this.traerDatos();
    console.log(this.$router);
  },
  updateSelectedAlumn() {
    return this.alumnoSeleccionado;
  },
};
</script>
