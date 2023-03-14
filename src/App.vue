<template>
  <!-- 要 fixed 嗎?! -->
  <div
    class="hidden w-full top-0 left-0 right-0 text-white z-50 bg-main"
    :class="{
      hidden: !showNavbar,
      'bg-[#5ca4cf] shadow-xl shadow-[#cccccc]': !isTop,
    }"
  >
    <vHeader id="header"></vHeader>
  </div>
  <!-- <Button class="flex justify-between items-center w-[220px]">
      <span>了解更多</span>
      <span>-></span>
    </Button> -->

  <RouterView />
</template>

<script>
const OFFSET = 60;
// import HelloWorld from '@/components/HelloWorld.vue'
import vHeader from '@/components/Header.vue';
// import Button from '@/components/Button.vue'
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      isTop: true,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    // window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return false;
      }

      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return false;
      }
      // this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.showNavbar = false;
      this.lastScrollPosition = window.pageYOffset;
      const windowTop = window.top.scrollY;
      if (windowTop >= 200) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
      return true;
    },
  },
  beforeUnmount() {
    // window.removeEventListener('scroll', this.onScroll);
  },
  components: {
    vHeader,
    // Button,
  },
};
</script>
<style scoped></style>
