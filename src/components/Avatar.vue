<template>
  <div class="avatar">
    <img alt="Avatar" src="../assets/me.jpeg">
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style lang="scss" scoped>
.avatar {
    border-radius: 100%;
    height: 200px;    
    overflow: hidden;
    width: 200px;

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
