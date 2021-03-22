<template>
  <div>
    <thead>
      <Boton
        class="btn btn-dark mt-2 mb-2 mx-auto"
        @onClick="hizoClickAgregar"
        texto="Agregar Alumno"
      />
      <tr class="bg-light">
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Ciudad</th>
        <th>Nº de Alumno</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <ProgressBar v-if="loading" :value="value" />
    <tbody v-if="!loading">
      <Fila
        v-for="alumno in alumnos"
        v-bind:key="alumno._id"
        :alumno="alumno"
        @onClick="obtenerClick"
      />
    </tbody>
  </div>
</template>

<script>
import Fila from "./Fila";
import Boton from "./Boton";
import ProgressBar from "./ProgressBar";
export default {
  name: "Tabla",
  components: {
    Fila,
    Boton,
    ProgressBar,
  },
  props: {
    alumnos: {
      type: Array,
    },
    value: Number,
    loading: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    obtenerClick(e) {
      this.$emit("onClick", { alumno: e.alumno, nombre: e.nombre });
    },
    hizoClickAgregar() {
      this.$emit("clickParaFila");
    },
  },
  mounted() {
    if (this.alumnos) {
      this.loading = false;
    }
  },
};
</script>

