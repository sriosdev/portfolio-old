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
    -webkit-box-shadow: 5px 5px 20px -10 px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 5px 5px 20px -10px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 20px -10px rgba(0, 0, 0, 0.6);
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
