<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L7.81875 16.7906L14.7656 9.84375H0V8.15625H14.7656L7.81875 1.20937L9 0L18 9L9 18Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fillColor: {
      default: '#62D5EE',
      // default: '#ffffff',
    },
  },
}
</script>
