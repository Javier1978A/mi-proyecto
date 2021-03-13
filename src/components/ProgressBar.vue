<template>
<div class="container mx-auto  w-50">
    
      <h2 class="modal-body text-primary">Loading...</h2>
    <b-progress :value="value"  show-value class="mb-3 alto"  >
    </b-progress>

</div>

</template>
<script>

  export default {
    name:'ProgressBar',
    props:{
      value:Number
    },
    data() {
      return {
        
        
      }
    },
    methods:{
        
    },
    
  }
</script>