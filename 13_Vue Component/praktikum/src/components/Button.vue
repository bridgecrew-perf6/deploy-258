<template>
  <button @click="buttonOperation">
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonOperation",
  methods: {
    buttonOperation() {
      this.$emit("buttonAll");
    },
  },
};
</script>
