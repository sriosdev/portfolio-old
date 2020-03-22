<template>
  <section>
    <Button class="btn-section" text="ejemplo1" :selected="isActive('ejemplo1')" @click.native="select('ejemplo1')"/>
    <Button class="btn-section" text="ejemplo2" :selected="isActive('ejemplo2')" @click.native="select('ejemplo2')"/>
    <Button class="btn-section" text="ejemplo3" :selected="isActive('ejemplo3')" @click.native="select('ejemplo3')"/>
    <Button class="btn-section" text="ejemplo4" :selected="isActive('ejemplo4')" @click.native="select('ejemplo4')"/>
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
      activeItem: 'ejemplo1'
    }
  },
  methods: {
    isActive: function(item) {
      return this.activeItem === item
    },
    select: function(item) {
      this.activeItem = item
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