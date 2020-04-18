<template>
  <div class="home">
    <Logo class="logo" />
    <p>Welcome! Here you'll find some information about me and my projects.</p>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'

export default {
  name: 'Home',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  div.home {
    margin-left: auto;
    margin-right: auto;
    width: 30em;

    .logo {
      margin-top: 1.8em;
      margin-bottom: 1em;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
  div.home {
    width: 85%;
  }
}
</style>
