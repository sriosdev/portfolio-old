<template>
  <a :class="isSelected"><i :class="icon"></i><span class="text">{{ text }}</span></a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    selected: Boolean,
    icon: String
  },
  computed: {
    isSelected: function() {
      return this.selected ? 'selected' : ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

a {
  background-color: white;
  border: none;
  border-radius: 50px;
  color: $color-secondary;
  cursor: pointer;
  font-family: "Baloo 2", cursive;
  font-size: 1.2em;
  font-weight: bold;
  width: 9em;
  padding: 0.2em;

  &:hover {
    background-image: linear-gradient(190deg, lighten($color-primary, 12%), lighten($color-secondary, 12%));
    color: white;
  }

  svg {
    margin-right: 0.6em;
  }
}

a.selected {
  background-image: linear-gradient(190deg, $color-primary, $color-secondary);
  color: white;
}

@media (min-width: 320px) and (max-width: 480px) {
  a {
    border-radius: 100%;
    height: 2.7em;
    vertical-align: middle;
    width: 2.7em;

    svg {
      margin: 0;
      margin-bottom: -14px;
    }

    .text {
      display: none;
    }
  }
}
</style>