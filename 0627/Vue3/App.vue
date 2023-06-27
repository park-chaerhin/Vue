<template>
  <!--Option API-->
  <div id="date">
    <h1>Option API</h1>
    {{ date }}
  </div>

  <!--Composition API-->
  <div id="date2">
    <h1>Composition API</h1>
    {{ date2 }}
  </div>
</template>

<script>
  export default {
    //Option API
    data(){
      return {
        date: Date().toString(),
      }
    },

    //Composition API
    setup(){
      const date2 = Date().toString()
      return{
        date2,
      }
    }
  }
</script>

