<template>
  <!-- https://codepen.io/andymerskin/pen/XNMWvQ 視差效果 -->
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
    :style="cardStyle"
  >
    <div class="card lg:w-96 bg-white shadow-xl" :style="cardBgTransform">
      <figure>
        <img class="w-full h-[200px]" :src="tour.image" alt="tours" />
      </figure>
      <div class="card-body py-4">
        <div class="flex gap-1 mb-4">
          <div
            class="badge-md badge-ghost badge"
            v-for="(tag, idx) in tour.tags"
            :key="'tag' + idx"
          >
            {{ tag }}
          </div>
        </div>
        <p class="font-Roboto">
          {{ tour.sdate }}
          <span v-if="tour.edate.length">~ {{ tour.edate }}</span>
        </p>
        <h2 class="card-title">
          {{ tour.title }}
        </h2>
        <div class="flex tours-center justify-between">
          <div
            class="badge bg-[#dd6969] border-0 text-white text-sm font-Roboto"
          >
            還有 {{ tour.quota }} 名額 / 共 {{ tour.total }} 人
          </div>
          <Countdown></Countdown>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline">我要報名</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';

export default {
  props: ['tour'],
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  },
  components: {
    Countdown,
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -20;
      const tY = this.mousePY * -20;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.card:hover {
  transition: 0.6s $hoverEasing;
}
.card {
  transition: 0.5s $returnEasing;
}
</style>
