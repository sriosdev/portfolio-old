<template>
  <div class="about-me">
    <h1>About me</h1>
    <p>Since I was a child, I've always been an enthusiastic about computers. One day, I come across programming; and that day I decided that I'd like to devote to it.</p>
    <p>I've studied web application development and I'm currently working as developer in a tech-company.</p>
    <p>During these years, I've developed traditional web apps and RESTful APIs, using PHP, JavaScript, and MySQL. I've also used frameworks such as Laravel, Symfony, and Vue.js, professionally as well as personally.</p>
    <p>Nowadays, I'm learning Go, the advantages of concurrent programming, and anything that comes up.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style lang="scss" scoped>
  div.about-me {
    margin-bottom: 5em;
    margin-left: auto;
    margin-right: auto;
    width: 30em;

    p {
      text-align: justify;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
  div.about-me {
    width: 85%;
  }
}
</style>