<template>
  <div class="about-me">
    <h2>About me</h2>
    <p>Since I was a child, I've been an enthusiast of computers. One day I came across programming, and that's when I decided I wanted to become a developer.</p>
    <p>I've studied web application development and I'm currently working as a developer in a tech company.</p>
    <p>In the last few years, I've developed traditional web apps and RESTful APIs using PHP, JavaScript and MySQL. I've also used frameworks such as Laravel, Symfony and Vue.js, professionally and on my personal projects.</p>
    <p>Today, I am focusing my studies on Go, the benefits of concurrent programming, and I'm always happy to explore new things.</p>
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