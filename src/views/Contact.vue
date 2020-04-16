<template>
  <div>
    <h2>Contact me</h2>
    <p>
      <a href="https://www.linkedin.com/in/sergio-riosf/">
        <i class="fab fa-linkedin"></i> /sergio-riosf
      </a>
    </p>
    <p>
      <a href="https://twitter.com/sriosdev">
        <i class="fab fa-twitter"></i> @sriosdev
      </a>
    </p>
    <p>
      <a href="https://github.com/sriosdev">
        <i class="fab fa-github"></i> sriosdev
      </a>
    </p>
    <p>
      <a href="mailto:hello@sergiorios.dev">
        <i class="fas fa-envelope"></i> riosfsergio@gmail.com
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