<template>
<div>
    <h5>Value label</h5>
    <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>

</div>
</template>
<script>

  export default {
    name:'ProgressBar',
    data() {
      return {
        value: 0,
        max: 50
      }
    },
    methods:{
        incrementValue(){
            setInterval(() =>{
                if(this.value < 100){
                    this.value= this.value+1;
                    console.log(this.value)
                }
            }, 1000)
        }
    },
    mounted(){
        this.incrementValue();
    }
  }
</script>