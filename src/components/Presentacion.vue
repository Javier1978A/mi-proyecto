<template>
  <div class="div-padre">
    <div class="titulo">
      <h2>{{ titulo }}</h2>
    </div>
    <div class="card-container">
      <b-card
        title="Card Title"
        img-src="../assets/Javi.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 18rem"
        class="mb-2"
      >
        <b-card-text>
          Mi nombre es Javier Archuby, tengo 43 años. Soy estudiante de
          Programación Front End y mi hobby es jugar al tennis.
        </b-card-text>
      </b-card>

      <b-card
        title="Card Title"
        img-src="../assets/Sofi.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 16rem"
        class="mb-2"
      >
        <b-card-text>
          Mi nombre es Sofía Capurro, tengo 40 años. Soy estudiante de
          Programación Front End y mi hobby es leer.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentacion",
  props: {},
  data() {
    return {
      titulo: "Estudiantes FrontEnd",
    };
  },
  methods: {
    cambiarTitulo() {},
  },
};
</script>


<style scoped>
@import "../assets/estilo.css";
</style>
