<template>
<div class="form">
    <form  action="">
        <input @input="$v.nombre.$touch()" v-model="nombreDeUsuario" type="text">
        <input @input="$v.email.$touch()" v-model="email" type="text">
        <input@input="$v.direccion.$touch()" v-model="direccion" type="text">
        <input @input="$v.telefono.$touch()" v-model="telefono" type="text">
        <input @input="$v.password.$touch()" v-model="password" type="text">
        <Boton class="btn btn-outline-success" @onClick ="enviarEvento" texto='Aceptar'/>
        <Boton class="btn btn-outline-danger" @onClick ="enviarEvento" texto='Cancelar'/>
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