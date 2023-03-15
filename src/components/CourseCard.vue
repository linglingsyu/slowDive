<template>
  <!-- https://codepen.io/andymerskin/pen/XNMWvQ 視差效果 -->
  <!-- @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave" -->
  <div class="card-wrap" ref="card" :style="cardStyle">
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
          <div class="rating rating-sm rating-half">
            <!-- <input type="radio" name="rating-10" class="rating-hidden" /> -->
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-1"
              checked
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-main mask mask-star-2 mask-half-2"
            />
          </div>

          <div
            class="badge bg-[#dd6969] border-0 text-white text-sm font-Roboto"
          >
            已有 {{ course.people }} 人參加
          </div>
        </div>
        <h2 class="card-title">
          {{ course.title }}
        </h2>
        <p>{{ course.desc }}</p>
        <div class="text-end font-Roboto">
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

export default {
  props: ['course'],
  mounted() {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  computed: {},
};
</script>
