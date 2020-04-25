<template>
  <div>
    <h2>Contact me</h2>
    <p>
      <a href="https://www.linkedin.com/in/sergiorios-dev/" target="_blank">
        <i class="fab fa-linkedin"></i> /sergiorios-dev/
      </a>
    </p>
    <p>
      <a href="https://twitter.com/sriosdev" target="_blank">
        <i class="fab fa-twitter"></i> @sriosdev
      </a>
    </p>
    <p>
      <a href="https://github.com/sriosdev" target="_blank">
        <i class="fab fa-github"></i> sriosdev
      </a>
    </p>
    <p>
      <a href="mailto:hello@sergiorios.dev" target="_blank">
        <i class="fas fa-envelope"></i> hello@sergiorios.dev
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

a {
  color: $color-secondary;
  text-decoration: none;

  svg {
    color: $color-secondary;
    margin-right: 0.2em;
  }
}
</style>