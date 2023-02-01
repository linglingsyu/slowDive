<template>
  <a
    :href="url"
    class="flex items-center text-blue-40 p-5 rounded-full shadow-btn"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'linkButton',
  props: ['url'],
}
</script>
