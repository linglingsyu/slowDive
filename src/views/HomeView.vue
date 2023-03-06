<template>
  <main>
    <section class="h-screen relative">
      <video
        class="absolute top-0 left-0 w-full h-full object-cover -z-10"
        muted
        autoplay
        loop
      >
        <source src="@/assets/dive.mp4" type="video/mp4" />
        <source src="@/assets/dive2.mp4" type="video/mp4" />
        <p>Your browser cannot play the provided video file.</p>
      </video>
      <div
        class="vertical-lr flex justify-start items-center w-full h-full text-white text-[50px]"
      >
        <h1>
          <div class="indent-[2em] p-5">
            <span class="tracking-widest border-l border-l-white"
              >愛上自由的大海</span
            >
          </div>
          <div class="p-5">
            <span class="tracking-widest border-l border-l-white"
              >用一次呼吸的時間</span
            >
          </div>
        </h1>
      </div>
    </section>

    <section class="container -mb-[242px]">
      <div
        class="relative py-10 bg-white rounded-tr-[100px] min-h-[300px] -translate-y-[242px] after:block after:bg-white after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:-translate-x-1/2 after:-z-10"
      >
        <h2 class="text-4xl text-blue-40">News</h2>
        <ul class="pr-[110px]">
          <li
            class="font-Roboto border-b border-b-black-40"
            v-for="item in 3"
            :key="item"
          >
            <a href="#" class="flex items-center h-full py-10">
              <div class="w-[196px] text-lg text-black-60">2023.01.01</div>
              <div class="flex-grow text-xl text-black">
                菲律賓宿霧薄荷島潛水考證行程開始嘍
              </div>
              <div class="w-15 text-center">
                <ArrowIcon></ArrowIcon>
              </div>
            </a>
          </li>
          <li class="font-Roboto">
            <a href="#" class="block text-center pt-10">more</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-[120px]">
      <div class="container">
        <h2
          class="flex items-center text-black-100 mb-20 after:h-px after:bg-black-40 after:flex-grow"
        >
          <span class="text-[80px]">Course</span
          ><span class="text-2xl border-x border-x-black-100 px-5 mx-5"
            >精選課程</span
          >
        </h2>
      </div>

      <div class="bg">
        <div
          :class="[
            item % 2 === 0
              ? '2xl:mr-[calc((100vw-1320px)/2)] xl:mr-[calc((100vw-1140px)/2)] lg:mr-[calc((100vw-960px)/2)]'
              : '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]',
          ]"
          v-for="(item, index) in 3"
          :key="index"
        >
          <h3
            class="text-[150px] leading-[.8] font-light"
            :class="[
              index !== 0
                ? 'bg-clip-text text-transparent bg2'
                : 'text-[#cef2fa]',
              item % 2 === 0
                ? '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
                : '',
            ]"
          >
            Open water
          </h3>
          <div>
            <img
              class="h-[700px] w-full object-cover"
              :class="[
                item % 2 === 0 ? 'rounded-tr-[100px]' : 'rounded-tl-[100px]',
              ]"
              src="@/assets/images/course01.jpg"
              alt="course01.png"
            />
            <div
              class="w-9/12 bg-white py-10 px-[110px] -translate-y-1/3"
              :class="[
                item % 2 === 0
                  ? 'rounded-tl-[50px] ml-auto'
                  : 'rounded-tr-[50px]',
              ]"
            >
              <div class="text-lg text-danger mb-5">需有ow證照</div>
              <div class="text-xl text-blue-40">通往探索水底世界的門票</div>
              <div class="text-4xl font-Roboto my-5">
                PADI OW 初階開放水域潛水員課程
              </div>
              <div class="flex items-start justify-between">
                <p class="w-[416px] text-lg text-black-60 leading-[34px]">
                  水肺潛水的入門課程，取得證照後，開始休閒潛水之旅
                  ，在水中停留更長時間、去更多海域、看更精彩的海底世界！
                </p>
                <linkButton url="#" class="justify-between w-[220px]">
                  <span>了解更多</span>
                  <span><ArrowIcon></ArrowIcon></span>
                </linkButton>
                <vButton class="justify-center">
                  <CartIcon fillColor="#62D5EE"></CartIcon>
                </vButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-[120px] pb-20">
      <h2
        class="flex items-center text-black-100 mb-[120px] after:h-px after:bg-black-40 after:flex-grow"
      >
        <span class="text-[80px]">Explore</span
        ><span class="text-2xl border-x border-x-black-100 px-5 mx-5"
          >探索海洋</span
        >
      </h2>
      <div class="flex flex-wrap -mx-3 gap-y-20">
        <div class="basis-4/12 px-3" v-for="item in 7" :key="item">
          <div>
            <img
              class="h-[380px] object-cover"
              src="@/assets/images/play01.jpg"
              alt="play01.jpg"
            />
            <div class="font-noto flex justify-between items-center mt-3 mb-5">
              <span class="text-black-60">2023.01.01</span>
              <span class="text-danger">還剩 3 個名額</span>
            </div>
            <a href="#">
              <div class="flex justify-between items-center">
                <h3 class="text-3xl">東北角一日放呆</h3>
                <ArrowIcon
                  class="w-[22px] h-[22px]"
                  fillColor="#121212"
                ></ArrowIcon>
              </div>
            </a>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="block text-center font-noto text-2xl py-10 text-blue-60"
        ><span class="shadow-[0_1px_0_0_#62D5EE]">Read More</span></a
      >
    </section>
    <section class="container pb-[120px]">
      <h2
        class="relative flex items-center text-black-100 mb-[120px] after:h-px after:bg-black-40 after:flex-grow"
      >
        <div class="text-[80px]">QA</div>
        <div class="text-2xl border-x border-x-black-100 px-5 mx-5">
          常見問題
        </div>
      </h2>

      <ul>
        <li class=" border-b border-black-40">
          <label class="flex justify-between items-center py-10 cursor-pointer">
            <input type="checkbox" class="" />
            <h3 class="text-3xl">不會游泳可以潛水嗎？</h3>
            <ArrowIcon class="w-[30px] h-[30px] rotate-90"></ArrowIcon>
          </label>
          <p class="py-10 text-lg leading-[34px]">
            對水肺潛水來說，學員的游泳能力跟學習潛水的能力基本上是沒有直接關係的，水肺潛水是透過水肺裝備讓你能在水下呼吸氣瓶裡的空氣，所以你不需要擔心自己沒辦法換氣，唯一跟潛水有關聯的部分就是，對水的熟悉度。
            對平時不常接觸水域活動的學員來說，是可以夠過較長的適應期來改善自己心理上的不適感
          </p>
        </li>
      </ul>
      <a
        href="#"
        class="block text-center font-noto text-2xl py-10 text-blue-60"
        ><span class="shadow-[0_1px_0_0_#62D5EE]">Read More</span></a
      >
    </section>
  </main>
</template>

<script>
import ArrowIcon from '@/components/icons/IconArrow.vue'
import CartIcon from '@/components/icons/IconCart.vue'
import vButton from '@/components/Button.vue'
import linkButton from '@/components/linkButton.vue'
export default {
  components: {
    vButton,
    ArrowIcon,
    CartIcon,
    linkButton,
  },
}
</script>

<style></style>
