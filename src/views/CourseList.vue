<template>
  <div class="container py-20">
    <h1 class="mb-10">所有課程列表</h1>
    <div class="flex flex-wrap md:m-4">
      <div
        class="w-full md:w-1/2 lg:w-3/12 py-4 md:p-4"
        v-for="course in courses"
        :key="course.id"
      >
        <CourseCard :course="course"></CourseCard>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';

import openWater from '@/assets/images/course/open-water.jpg';

export default {
  data() {
    return {
      courses: [
        {
          id: Date.now(),
          title: 'open water 初級開放水域潛水員',
          price: 15000,
          image: openWater,
          images: [],
          people: 1500,
          desc: '為學員提供基礎的潛水知識和技能，使其能夠在開放水域進行安全的潛水活動',
          content: 'aaaaaaaaaaa',
          rank: 4.5,
          category: '水肺',
        },
      ],
    };
  },
  components: {
    CourseCard,
  },
};
</script>
