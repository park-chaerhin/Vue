<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default{
  
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <div>
    <Header></Header>
    <div> <h1> Main Content </h1> </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
