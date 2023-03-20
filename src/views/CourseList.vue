<template>
  <div class="container py-20">
    <h1 class="mb-10 text-3xl">所有課程列表</h1>
    <div class="basis-2/12">
      <h3>評等</h3>
    </div>
    <div class="flex">
      <div class="basis-10/12">
        <div class="flex flex-wrap md:m-4">
          <div
            class="w-full md:w-1/2 lg:w-4/12 py-4 md:p-4"
            v-for="course in courses"
            :key="course.id"
          >
            <CourseCard :course="course"></CourseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
import RankStar from '@/components/RankStar.vue';
import openWater from '@/assets/images/course/open-water.jpg';

export default {
  data() {
    return {
      courses: [
        {
          id: Math.floor(Math.random() * 5000) + 1,
          title: 'open water 初級開放水域潛水員',
          price: 15000,
          image: openWater,
          images: [],
          people: 1500,
          desc: '為學員提供基礎的潛水知識和技能，使其能夠在開放水域進行安全的潛水活動',
          content: 'aaaaaaaaaaa',
          rank: 4.5,
          category: '水肺',
          isCollect: false,
        },
        {
          id: Math.floor(Math.random() * 5000) + 1,
          title: 'open water 初級開放水域潛水員',
          price: 15000,
          image: openWater,
          images: [],
          people: 1500,
          desc: '為學員提供基礎的潛水知識和技能，使其能夠在開放水域進行安全的潛水活動',
          content: 'aaaaaaaaaaa',
          rank: 4.5,
          category: '水肺',
          isCollect: true,
        },
        {
          id: Math.floor(Math.random() * 5000) + 1,
          title: 'open water 初級開放水域潛水員',
          price: 15000,
          image: openWater,
          images: [],
          people: 1500,
          desc: '為學員提供基礎的潛水知識和技能，使其能夠在開放水域進行安全的潛水活動',
          content: 'aaaaaaaaaaa',
          rank: 4.5,
          category: '水肺',
          isCollect: true,
        },
      ],
    };
  },
  components: {
    CourseCard,
    RankStar,
  },
};
</script>
