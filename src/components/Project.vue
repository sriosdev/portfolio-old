<template>
  <a :href="url" target="_blank">
    <div class="project">
      <img :src="require(`@/assets/${image}`)" alt="Project" />
      <div class="text">
        <h3>{{ name }}</h3>
        <span>{{ description }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Project',
  props: {
    name: String,
    description: String,
    image: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

a {
  color: $color-text;
  text-decoration: none;
}

h3 {
  margin: 0;
}

.project {
  border-radius: 1em;
  -webkit-box-shadow: 5px 0px 20px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 0px 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 0px 20px -5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 25em;
  transition: all 0.5s;
  width: 25em;

  &:hover {
    -webkit-box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.5);
  }

  img {
    display: block;
    height: 65%;
    width: 100%;
    object-fit: cover;
  }

  .text {
    border-top: 5px solid $color-secondary;

    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>