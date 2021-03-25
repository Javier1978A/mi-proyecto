<template>
  <div class="div-padre">
    <div class="titulo">
      <h2>{{ titulo }}</h2>
    </div>
    <div class="card-container">
      <b-card
        title="Javier Archuby"
        img-src="../assets/Javi.jpg"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2"
      >
        <b-card-text>
          <p>Edad: 43 años</p>
          <p>Hobby: jugar tennis</p>
          <p>Ciudad: Tandil</p>
        </b-card-text>
      </b-card>

      <b-card
        title="Sofia Capurro"
        img-src="../assets/Sofi.jpg"
        img-alt="Image"
        tag="article"
        img-top
        class="mb-2"
      >
        <b-card-text>
          <p>Edad: 40 años</p>
          <p>Hobby: leer</p>
          <p>Ciudad: Tandil</p>
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
      titulo: "Estudiantes Front-End",
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
