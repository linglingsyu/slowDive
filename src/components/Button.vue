<template>
  <button
    type="button"
    class="flex items-center text-blue-40 p-5 rounded-full shadow-btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vueButton",
  props: {},
};
</script>
