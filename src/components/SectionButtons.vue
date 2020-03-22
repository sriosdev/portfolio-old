<template>
  <section>
    <Button class="btn-section" text="About me" :selected="isActive('about')" @click.native="select('about')"/>
    <Button class="btn-section" text="Projects" :selected="isActive('projects')" @click.native="select('projects')"/>
    <Button class="btn-section" text="Curriculum" :selected="isActive('cv')" @click.native="select('cv')"/>
    <Button class="btn-section" text="Contact" :selected="isActive('contact')" @click.native="select('contact')"/>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
  padding-top: 5em;

  .btn-section {
    margin: 0 1.5em;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  section {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>