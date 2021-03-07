<template>
<div class="div-padre">
  <div class="titulo">
  <h2>{{titulo}}</h2>
  </div>
  <div class="card-container">
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    
  </b-card>

  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    
  </b-card>

</div>
</div>
</template>

<script>
export default {
  name: 'Presentacion',
  props: {
    
  },
  data (){
    return{
      titulo: "Estudiantes FrontEnd"
    }
  },
  methods:{
    cambiarTitulo(){

    }
  }
}
  

  
</script>


<style scoped>
@import '../assets/estilo.css';
</style>
