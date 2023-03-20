<template>
  <!-- https://codepen.io/andymerskin/pen/XNMWvQ 視差效果 -->
  <!-- @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave" -->
  <div class="card-wrap" ref="card" :style="cardStyle">
    {{ course.id }}
    <div class="card w-full bg-white shadow-md" :style="cardBgTransform">
      <figure>
        <img
          class="w-full h-[200px] object-cover"
          :src="course.image"
          alt="courses"
        />
      </figure>
      <div class="card-body py-4">
        <div class="flex justify-between items-center">
          <RankStar :name="'rating' + course.id"></RankStar>
          <button class="text-[#c21e1e]" type="button">
            <span v-if="course.isCollect" class="material-icons-outlined">
              favorite
            </span>
            <span v-else class="material-icons-outlined">
              favorite_border
            </span>
          </button>
        </div>
        <h2 class="card-title py-2">
          {{ course.title }}
        </h2>
        <p class="text-sm leading-normal">{{ course.desc }}</p>
        <div class="flex justify-between items-center font-Roboto py-4">
          <div
            class="badge bg-[#dd6969] border-0 text-white text-sm font-Roboto"
          >
            已有 {{ course.people }} 人參加
          </div>
          <div>$15,000</div>
        </div>
        <!-- <div class="card-actions justify-end">
          <button class="btn btn-primary btn-outline">我要報名</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Countdown from '@/components/Countdown.vue';
import RankStar from '@/components/RankStar.vue';

export default {
  props: ['course'],
  mounted() {},
  data() {
    return {};
  },
  components: { RankStar },
  methods: {},
  computed: {},
};
</script>
