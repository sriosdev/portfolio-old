<template>
  <header>
    <h1>Developing web applications and anything that comes up</h1>
    <Avatar class="avatar" />
  </header>
</template>

<script>
import Avatar from './Avatar.vue'

export default {
  name: "Header",
  components: {
    Avatar
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: 300px;
  background-image: linear-gradient(#ffa136, #e9602f);

  h1 {
    position: relative;
    color: white;
    margin-top: 0;
    top: 5rem;
  }

  .avatar {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 100px;
  }
}
</style>