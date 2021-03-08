<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand ><router-link to="/">Home</router-link></b-navbar-brand>
    <b-navbar-brand ><router-link  to="/alumnos">Alumnos</router-link></b-navbar-brand>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  methods:{
    
    }
  }

</script>
