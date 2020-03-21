<template>
  <header>
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
  height: 200px;
  background-image: linear-gradient(#ffa136, #e9602f);
  position: relative;

  .avatar {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50px;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
    header {   
      height: 150px;
    }
}
</style>