<template>
  <div
    class="w-full fixed top-0 left-0 right-0 text-white z-50 bg-[#004FA2]"
    :class="{
      hidden: !showNavbar,
      'bg-[#5ca4cf] shadow-xl shadow-[#cccccc]': !isTop
    }"
  >
    <Header id="header" class=""></Header>
  </div>
  <!-- <Button class="flex justify-between items-center w-[220px]">
      <span>了解更多</span>
      <span>-></span>
    </Button> -->

  <RouterView />
</template>

<script>
const OFFSET = 60
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
// import Button from '@/components/Button.vue'
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      isTop: true
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }

      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
      const windowTop = window.top.scrollY
      if (windowTop >= 200) {
        this.isTop = false
      } else {
        this.isTop = true
      }
      console.log(this.isTop)
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  components: {
    Header
    // Button,
  }
}
</script>
<style scoped></style>
