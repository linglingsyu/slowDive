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

    <section>
      <div class="container">
        <h2 class="flex items-center text-black-100 mb-20">
          <span class="text-[80px]">Course</span
          ><span class="text-2xl border-x border-x-black-100 px-5 mx-5"
            >精選課程</span
          >
        </h2>
      </div>

      <div class="bg min-h-[1600px]">
        <div
          :class="[
            item % 2 === 0
              ? '2xl:mr-[calc((100vw-1320px)/2)] xl:mr-[calc((100vw-1140px)/2)] lg:mr-[calc((100vw-960px)/2)]'
              : '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]',
          ]"
          v-for="(item, index) in 3"
          :key="index"
        >
          <!-- <h3
          class="bg-clip-text text-transparent bg-gradient-to-b from-[#cef2fa] via-[#CEF2FA] to-white text-[150px] leading-[150px]"
        >
          Open water
        </h3> -->

          <h3 class="text-[#cef2fa] text-[150px] leading-[120px]">
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
