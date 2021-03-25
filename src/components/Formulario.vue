<template>
  <div class="form">
    <form class="container" action="">
      <input
        class="mb-2 form-control"
        @input="$v.nombre.$touch()"
        v-model="nombre"
        type="text"
        placeholder="Nombre"
      />
      <input
        class="mb-2 form-control"
        @input="$v.apellido.$touch()"
        v-model="apellido"
        type="text"
        placeholder="Apellido"
      />
      <input
        class="mb-2 form-control"
        @input="$v.edad.$touch()"
        v-model="edad"
        type="text"
        placeholder="Edad"
      />
      <input
        class="mb-2 form-control"
        @input="$v.ciudad.$touch()"
        v-model="ciudad"
        type="text"
        placeholder="Ciudad"
      />
      <input
        class="mb-2 form-control"
        @input="$v.nroAlumno.$touch()"
        v-model="nroAlumno"
        type="text"
        placeholder="Nº Alumno"
      />
      <p v-if="!nroValido" class="alert alert-danger">
        Ingrese un Numero de seis digitos
      </p>

      <Boton
        class="btn btn-outline-success mr-2"
        @onClick="enviarEvento"
        texto="Aceptar"
        :disabled="$v.$invalid"
      />
      <Boton
        class="btn btn-outline-danger"
        @onClick="enviarEvento"
        texto="Cancelar"
      />
    </form>
  </div>
</template>
<script>
import Boton from "./Boton";
import { required, numeric } from "vuelidate/lib/validators";
export default {
  name: "Formulario",
  props: {
    alumnoSeleccionado: {
      type: Object,
    },
  },
  data() {
    return {
      nombre: this.alumnoSeleccionado.nombre,
      apellido: this.alumnoSeleccionado.apellido,
      edad: this.alumnoSeleccionado.edad,
      ciudad: this.alumnoSeleccionado.ciudad,
      nroAlumno: this.alumnoSeleccionado.nroAlumno,
      alumnoModificado: {},
      nroValido: true,
    };
  },
  validations: {
    nombre: { required },
    apellido: { required },
    edad: { required, numeric },
    ciudad: { required },
    nroAlumno: { required, numeric },
  },
  components: {
    Boton,
  },
  methods: {
    enviarEvento(e) {
      console.log(this.validNroAlumno(this.nroAlumno));
      if (this.validNroAlumno(this.nroAlumno)) {
        this.nroValido = true;
        let alumnSeleccionado = {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          ciudad: this.ciudad,
          nroAlumno: this.nroAlumno,
        };
        this.alumnoSeleccionado.nombre = "";
        this.alumnoSeleccionado.apellido = "";
        this.alumnoSeleccionado.edad = "";
        this.alumnoSeleccionado.ciudad = "";
        this.alumnoSeleccionado.nroAlumno = "";
        this.$emit("OnClick", { alumno: alumnSeleccionado, nombre: e.nombre });
      } else {
        this.nroValido = false;
      }
    },
    validNroAlumno(nroAlumno) {
      let re = /^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/;
      return re.test(nroAlumno);
    },
  },
};
</script>