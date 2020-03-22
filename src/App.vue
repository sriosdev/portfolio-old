<template>
  <div id="app">
    <Header />
    <SectionButtons />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SectionButtons from './components/SectionButtons.vue'

export default {
  name: 'App',
  components: {
    Header,
    SectionButtons
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo+2&display=swap');

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Baloo 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
}
</style>
