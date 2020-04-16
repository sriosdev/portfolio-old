<template>
  <section>
    <Button class="btn-section" text="Home" icon="fas fa-home" :selected="isActive('home')" @click.native="select('home')"/>
    <Button class="btn-section" text="Projects" icon="fas fa-laptop-code" :selected="isActive('projects')" @click.native="select('projects')"/>
    <Button class="btn-section" text="About me" icon="fas fa-user" :selected="isActive('about')" @click.native="select('about')"/>
    <Button class="btn-section" text="Contact" icon="fas fa-envelope" :selected="isActive('contact')" @click.native="select('contact')"/>
  </section>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'SectionButtons',
  components: {
    Button
  },
  data: function() {
    return {
      activeItem: this.activeItem = this.$router.currentRoute.name
    }
  },
  methods: {
    isActive: function(item) {
      return this.activeItem === item
    },
    select: function(item) {
      this.goSection(item)
      this.activeItem = this.$router.currentRoute.name
    },
    goSection: function(section) {
      this.$router.push({ name: section })
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  background-image: linear-gradient(#ddd, rgba(255, 255, 255, 0));
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  padding-top: 5em;

  .btn-section {
    margin: 0 0.5em;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  section {
    padding-bottom: 0;
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>