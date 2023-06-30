<template>
    <h1>{{title}}</h1>
</template>

<script>
export default{
    props:{
        // title: String
        title: {
            type: String,
            default: 'Default Title'
        }
    }
}
</script>

<style scoped>
h1{
    color:orangered
}
</style>