<template>
  <div class="form">
    <form class="container" action="">
      <input
        class="mb-2 form-control"
        @input="$v.nombre.$touch()"
        v-model="nombreDeUsuario"
        type="text"
      />
      <input
        class="mb-2 form-control"
        @input="$v.email.$touch()"
        v-model="email"
        type="text"
      />
      <input
        class="mb-2 form-control"
        @input="$v.direccion.$touch()"
        v-model="direccion"
        type="text"
      />
      <input
        class="mb-2 form-control"
        @input="$v.telefono.$touch()"
        v-model="telefono"
        type="text"
      />
      <input
        class="mb-2 form-control"
        @input="$v.password.$touch()"
        v-model="password"
        type="text"
      />
      <Boton
        class="btn btn-outline-success mr-2"
        @onClick="enviarEvento"
        texto="Aceptar"
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
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  name: "Formulario",
  props: {
    alumnoSeleccionado: {
      type: Object,
    },
  },
  data() {
    return {
      nombreDeUsuario: this.alumnoSeleccionado.nombreDeUsuario,
      email: this.alumnoSeleccionado.email,
      direccion: this.alumnoSeleccionado.direccion,
      telefono: this.alumnoSeleccionado.telefono,
      password: this.alumnoSeleccionado.password,
      alumnoModificado: {},
    };
  },
  validations: {
    nombre: { required },
    email: { required, email },
    edad: { required, numeric },
    direccion: { required },
    telefono: { required },
    password: { required },
  },
  components: {
    Boton,
  },
  methods: {
    enviarEvento(e) {
      let alumnSeleccionado = {
        nombreDeUsuario: this.nombreDeUsuario,
        email: this.email,
        direccion: this.direccion,
        telefono: this.telefono,
        password: this.password,
      };
      this.nombreDeUsuario = "";
      this.email = "";
      this.direccion = "";
      this.telefono = "";
      this.password = "";
      this.$emit("OnClick", { alumno: alumnSeleccionado, nombre: e.nombre });
    },
  },
};
</script>