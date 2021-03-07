<template>
    <button @click.prevent= 'hizoClick'>{{texto}}</button>
</template>

<script>
export default {
    name:'Boton',
    props:{
    texto:String
    },
    methods:{
        hizoClick(){
            this.$emit('onClick', {nombre:'Pepito'})
        }
        
    }
}
</script>