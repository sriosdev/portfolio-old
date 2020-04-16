<template>
  <div class="home">
    <h2>Welcome!</h2>
    <p>Hello! My name is Sergio.</p>
    <p>Here you'll find some information about me and my projects.</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  div.home {
    margin-bottom: 5em;
    margin-left: auto;
    margin-right: auto;
    width: 30em;
  }

  @media (min-width: 320px) and (max-width: 480px) {
  div.home {
    width: 85%;
  }
}
</style>
