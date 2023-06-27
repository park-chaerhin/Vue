<template>
  <div>
    <div>
      <h1>Option API</h1>
      <div v-text="vhtml"></div>
      <div v-html="vhtml2"></div>
    </div>

    <div>
      <h1>Composition API</h1>
      <div v-text="vhtml"></div>
      <div v-html="vhtml2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    //Option API
    data(){
      return {
        vhtml: '<h2>Options API TEXT</h2>'
      }
    },

    //Composition API
    setup(){
      const vhtml2 = '<h2>Options API TEXT</h2>'
      return{
        // vhtml2 : vhtml2
        vhtml2,
      }
    }
  }
</script>

