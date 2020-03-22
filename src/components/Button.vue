<template>
  <button :class="isSelected">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    selected: Boolean
  },
  computed: {
    isSelected: function() {
      return this.selected ? 'selected' : ''
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: white;
  border: 2.5px solid #8d36ff;
  border-radius: 50px;
  color: #8d36ff;
  cursor: pointer;
  font-family: "Baloo 2", cursive;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.2em 2em;

  &:hover {
    background-color: darken(#8d36ff, 20%);
    border: 2.5px solid darken(#8d36ff, 20%);;
    color: white;
  }
}

button.selected {
  background-color:#8d36ff;
  border: 2.5px solid #8d36ff;
  color: white;

  &:hover {
    background-image: none;
  }
}
</style>