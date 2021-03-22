<template>
  <tr>
    <td>{{ alumno.nombre }}</td>
    <td>{{ alumno.apellido }}</td>
    <td>{{ alumno.edad }}</td>
    <td>{{ alumno.ciudad }}</td>
    <td>{{ alumno.nroAlumno }}</td>
    <td>
      <Boton
        class="btn btn-primary mr-2"
        @onClick="obtenerClick"
        texto="editar"
      />
      <Boton class="btn btn-danger" @onClick="obtenerClick" texto="eliminar" />
    </td>
  </tr>
</template>
<script>
import Boton from "./Boton";
export default {
  name: "Fila",
  props: {
    alumno: {
      type: Object,
    },
  },
  components: {
    Boton,
  },
  methods: {
    obtenerClick(e) {
      this.$emit("onClick", { alumno: this.alumno, nombre: e.nombre });
    },
  },
};
</script>





