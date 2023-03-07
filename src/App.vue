<template>
  <Header class="fixed top-0 left-0 right-0 text-white"></Header>
  <!-- <Button class="flex justify-between items-center w-[220px]">
      <span>了解更多</span>
      <span>-></span>
    </Button> -->

  <RouterView />
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
// import Button from '@/components/Button.vue'
export default {
  components: {
    Header,
    // Button,
  },
};
</script>
<style scoped></style>
