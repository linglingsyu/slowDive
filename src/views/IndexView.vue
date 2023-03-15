<template>
  <!-- https://www.figma.com/file/UngNE2UNvSUyA32AjKEHXx/Untitled?node-id=63%3A593&t=sMVALcuLzBEOs7kN-0 -->
  <section class="h-screen relative overflow-hidden panel">
    <div class="w-full h-1/2 relative">
      <div
        v-for="item in 3"
        :key="item"
        class="bg-[#00aeff] w-[200vw] h-[205vw] opacity-30 absolute top-[-75vw] left-1/2 -ml-[100vw] -mt-[95vw] rounded-[43%] animate-[rotate_9000ms_linear_infinite] [&:nth-child(1)]:animate-[rotate_12000ms_linear_infinite] [&:nth-child(1)]:bg-[#98d9f7] [&:nth-child(2)]:animate-[rotate_15000ms_linear_infinite] [&:nth-child(2)]:opacity-10 [&:nth-child(2)]:bg-[#a7a6a6]"
      ></div>
      <div
        class="flex text-white text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 z-20"
      >
        <h1 class="relative tracking-widest">
          <!-- <p
              class="text-center mb-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] text-[3vw] tracking-[2px] uppercase"
            >
              Slow Diving
            </p> -->
          <p class="mb-4">用一次呼吸的時間</p>
          <p class="indent-[2em]">愛上自由的大海</p>
          <!--文字跳動 https://codepen.io/dev_loop/pen/NWxbVPE -->
          <!-- https://tobiasahlin.com/moving-letters/ -->
        </h1>
      </div>
    </div>
    <div
      id="scene"
      class="relative -top-1/3 right-0 z-10 w-[350px] float-right"
    >
      <img
        class="w-full opacity-90"
        data-depth="1"
        src="@/assets/turtle2.png"
      />
    </div>
    <div class="clear-both text-center text-white absolute left-1/2 bottom-1/4">
      <div
        class="animate-[scrollText_1.2s_linear_infinite] text-sm -mb-4 tracking-widest"
      >
        scroll
      </div>
      <span
        class="material-icons-outlined text-5xl animate-[scroll_1s_linear_infinite]"
      >
        expand_more
      </span>
    </div>
    <section class="container">
      <div
        class="absolute bottom-1/4 left-1/3 -translate-x-1/2 translate-y-1/2 p-6 w-1/2 bg-white rounded-lg rounded-tr-[100px]"
      >
        <h2 class="text-3xl text-main">News</h2>
        <ul class="">
          <li
            class="font-Roboto border-b border-b-black-30"
            v-for="item in 3"
            :key="item"
          >
            <a href="#" class="flex items-center h-full py-5">
              <div class="w-[196px] text-lg text-black-60">2023.01.01</div>
              <div class="flex-grow text-lg text-black">
                菲律賓宿霧薄荷島潛水考證行程開始嘍
              </div>
              <div class="w-15 text-center">
                <ArrowIcon></ArrowIcon>
              </div>
            </a>
          </li>
          <!-- <li class="font-Roboto">
              <a href="#" class="block text-center pt-10">more</a>
            </li> -->
        </ul>
      </div>
    </section>
  </section>

  <section class="h-screen py-15 panel">
    <div class="container">
      <h2 class="text-center text-4xl mb-15 text-black-80">
        讓我們為您打造一次難忘的潛水之旅
      </h2>
      <div class="relative">
        <swiper
          class="pb-4"
          :breakpoints="breakpoints"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
          :modules="modules"
          :navigation="{
            nextEl: '.swiper-custom-button-next',
            prevEl: '.swiper-custom-button-prev',
          }"
          :slides-per-view="4"
          :space-between="16"
        >
          <swiper-slide v-for="(item, index) in tour" :key="'tour' + index">
            <TourCard :tour="item"></TourCard
          ></swiper-slide>

          <!-- <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          ... -->
        </swiper>
        <div class="swiper-pagination md:hidden"></div>
        <div
          class="swiper-custom-button-prev hidden md:flex absolute left-0 top-1/4 z-20 w-12 h-12 rounded-full bg-black text-white items-center justify-center translate-y-1/2 -translate-x-7"
        >
          <span class="material-icons-outlined"> arrow_back_ios </span>
        </div>
        <div
          class="swiper-custom-button-next hidden md:flex absolute right-0 top-1/4 z-20 w-12 h-12 rounded-full bg-black text-white items-center justify-center translate-y-1/2 translate-x-7"
        >
          <span class="material-icons-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <a
        href="#"
        class="block text-center font-noto text-2xl py-10 text-blue-60"
        ><span class="shadow-[0_1px_0_0_#62D5EE]">探索更多旅程</span></a
      >
    </div>
  </section>

  <div class="bg">
    <section class="relative overflow-hidden">
      <div class="fish-wrapper">
        <div class="fish">
          <div class="fish__skeleton"></div>
          <div class="fish__inner">
            <!--body-->
            <div class="fish__body"></div>
            <div class="fish__body"></div>
            <div class="fish__body"></div>
            <div class="fish__body"></div>

            <!--head-->
            <div class="fish__head"></div>
            <div class="fish__head fish__head--2"></div>
            <div class="fish__head fish__head--3"></div>
            <div class="fish__head fish__head--4"></div>

            <div class="fish__tail-main"></div>
            <div class="fish__tail-fork"></div>

            <div class="fish__fin"></div>
            <div class="fish__fin fish__fin--2"></div>
          </div>
        </div>
      </div>

      <div class="bubbles">
        <div class="w-[20rem] h-[20rem]">
          <div class="bubbles__bubble"></div>
          <div class="bubbles__bubble"></div>
          <div class="bubbles__bubble"></div>
        </div>
      </div>
      <div class="rays"><div data-rays></div></div>
      <div class="lights">
        <div class="lights__group" data-lights="1">
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
          <div class="lights__light"></div>
        </div>
      </div>

      <!-- https://codepen.io/valerio-acerbis/pen/BaYaeRw -->
      <div class="content">
        <div class="course h-screen flex justify-center items-center panel">
          <div class="course-item container relative">
            <h2
              class="slide font-light bg-clip-text text-transparent translate-y-1/3 translate-x-5 bg-gradient-to-b from-[#3E7586] to-[#cccccc] text-[80px]"
            >
              Open Water
            </h2>
            <div class="relative flex items-center">
              <img
                class="barrel w-[50vw] h-[50vh] object-cover rounded-tr-3xl rounded-tl-3xl rounded-br-3xl relative z-10"
                src="@/assets/images/course01.jpg"
                alt="course01.jpg"
              />
              <div
                class="rounded-xl bg-white w-[30vw] h-[55vh] p-15 -translate-x-5 flex flex-col justify-between"
              >
                <div>
                  <h4 class="spring text-[#43746F] mb-5 text-lg">
                    通往探索水底世界的門票
                  </h4>
                  <h3 class="text-[#656565] mb-5 text-xl">
                    初階開放水域潛水員課程
                  </h3>
                  <p class="tracking-wide leading-snug text-black-60">
                    在開闊的海域中盡情探索！參加我們的 open
                    water課程，學習安全而有趣的潛水技巧。在專業教練的指導下，打造獨特的潛水體驗
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <button
                    type="button"
                    class="bg-[#5FADA5] text-white text-center rounded-lg py-5 px-10 hover:hue-rotate-15"
                  >
                    了解更多
                  </button>
                  <vButton
                    class="justify-center shadow-[0_0_30px_0_rgba(95,173,165,.25)]"
                  >
                    <CartIcon fillColor="#5FADA5"></CartIcon>
                  </vButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="course h-screen flex justify-center items-center panel">
          <div class="course-item container relative">
            <h2
              class="text-end font-light bg-clip-text text-transparent translate-y-1/3 -translate-x-5 bg-gradient-to-b from-[#0066A4] to-[#D39A5C] text-[80px]"
            >
              Open Water
            </h2>
            <div class="relative flex flex-row-reverse items-center">
              <img
                class="w-[50vw] h-[50vh] object-cover rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl relative z-10"
                src="@/assets/images/course001.jpg"
                alt="course01.jpg"
              />
              <div
                class="rounded-xl bg-white w-[30vw] h-[55vh] p-15 translate-x-5 flex flex-col justify-between"
              >
                <div>
                  <h4 class="text-[#764F39] mb-5 text-lg">
                    通往探索水底世界的門票
                  </h4>
                  <h3 class="text-[#656565] mb-5 text-xl">
                    初階開放水域潛水員課程
                  </h3>
                  <p class="tracking-wide leading-snug text-black-60">
                    在開闊的海域中盡情探索！參加我們的 open
                    water課程，學習安全而有趣的潛水技巧。在專業教練的指導下，打造獨特的潛水體驗
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <button
                    type="button"
                    class="bg-[#8F6F4A] text-white text-center rounded-lg py-5 px-10 hover:hue-rotate-15"
                  >
                    了解更多
                  </button>
                  <vButton
                    class="justify-center shadow-[0_0_30px_0_rgba(143,111,74,.25)]"
                  >
                    <CartIcon fillColor="#8F6F4A"></CartIcon>
                  </vButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="course h-screen flex justify-center items-center panel">
          <div class="course-item container relative">
            <h2
              class="font-light bg-clip-text text-transparent translate-y-1/3 translate-x-5 bg-gradient-to-b from-[#c6e8fa] to-[#5ca4cf] text-[80px]"
            >
              Enriched Air
            </h2>
            <div class="relative flex items-center">
              <img
                class="w-[50vw] h-[50vh] object-cover rounded-tr-3xl rounded-tl-3xl rounded-br-3xl relative z-10"
                src="@/assets/images/course03.jpg"
                alt="course01.jpg"
              />
              <div
                class="rounded-xl bg-white w-[30vw] h-[55vh] p-15 -translate-x-5 flex flex-col justify-between"
              >
                <div>
                  <h4 class="text-[#2F518E] mb-5 text-lg">
                    延長免減壓時間的秘密
                  </h4>
                  <h3 class="text-[#656565] mb-5 text-xl">高氧潛水員課程</h3>
                  <p class="tracking-wide leading-snug text-black-60">
                    用高氧空氣取代標準空氣
                    ，可延長免減壓極限，待在水底的時間更久。
                    使用高氧空氣潛水在世界各地已是相當普遍的趨勢。
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <button
                    type="button"
                    class="bg-[#2F518E] text-white text-center rounded-lg py-5 px-10 hover:hue-rotate-15"
                  >
                    了解更多
                  </button>
                  <vButton
                    class="justify-center shadow-[0_0_30px_0_rgba(47,81,142,.25)]"
                  >
                    <CartIcon fillColor="#2F518E"></CartIcon>
                  </vButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="bg">
      <section>
        <div class="container">
          <h2
            class="flex items-center text-black-100 after:h-px after:bg-black-40 after:flex-grow"
          >
            <span class="text-[80px]">Course</span
            ><span class="text-2xl border-x border-x-black-100 px-5 mx-5"
              >精選課程</span
            >
          </h2>
        </div>
        <div
          :class="[
            index % 2 !== 0
              ? '2xl:mr-[calc((100vw-1320px)/2)] xl:mr-[calc((100vw-1140px)/2)] lg:mr-[calc((100vw-960px)/2)]'
              : '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]',
          ]"
          v-for="(item, index) in course"
          :key="item.title"
        >
          <h3
            class="text-[100px] leading-[.8] font-light"
            :class="[
              index === 0 ? 'bg-clip-text text-transparent ' : 'text-[#cef2fa]',
              index % 2 !== 0
                ? '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
                : '',
            ]"
          >
            {{ item.title }}
          </h3>
          <div class="relative">
            <img
              class="h-[70vh] w-full object-cover"
              :class="[
                index % 2 !== 0 ? 'rounded-tr-[100px]' : 'rounded-tl-[100px]',
              ]"
              :src="item.image"
              alt="{{ item.image}}"
            />
            <div
              class="w-9/12 bg-white py-10 px-[110px] -translate-y-1/2"
              :class="[
                index % 2 !== 0
                  ? 'rounded-tl-[50px] ml-auto'
                  : 'rounded-tr-[50px]',
              ]"
            >
              <div class="text-lg text-danger mb-5" v-if="item.required.length">
                {{ item.required }}
              </div>
              <div class="text-xl text-blue-40">{{ item.subtitle }}</div>
              <div class="text-4xl font-Roboto my-5">
                {{ item.name }}
              </div>
              <div class="flex items-start justify-between">
                <p class="w-[416px] text-lg text-black-60 leading-[34px]">
                  {{ item.desc }}
                </p>
                <linkButton url="#" class="justify-between w-[220px]">
                  <span>了解更多</span>
                  <span>
                    <ArrowIcon></ArrowIcon>
                  </span>
                </linkButton>
                <vButton class="justify-center">
                  <CartIcon fillColor="#62D5EE"></CartIcon>
                </vButton>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-full h-20 flex justify-center items-center">
          <a
            class="btn btn-primary px-20 btn-xl text-xl h-20 translate-y-1/2"
            href="#"
            >學習更多課程</a
          >
        </div>
      </section>
    </div> -->

    <!-- <section class="py-20 h-screen panel">
        <div class="text-center container">
          <h2 class="text-blue-100 text-4xl">還有任何疑問嗎？</h2>
          <button type="button" class="mt-10 btn btn-primary text-xl h-15">
            <span class="material-icons-outlined text-xl mr-4"> email </span>
            立刻與我們聯絡！
          </button>
        </div>
      </section> -->

    <section class="pt-15 h-screen panel">
      <div class="container">
        <h2 class="text-4xl mb-10 text-center">常見問題</h2>
        <ul class="">
          <li
            v-for="(qa, index) in faq"
            :key="'qa' + index"
            tabindex="0"
            class="collapse collapse-plus border-b border-base-300 mb-4 group"
          >
            <div
              class="collapse-title text-xl font-medium text-[#656565] group-focus:bg-white"
            >
              {{ qa.q }}
            </div>
            <div
              class="collapse-content text-black-60 group-focus:bg-white"
              v-html="qa.a"
            ></div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import { Navigation, Pagination } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowIcon from '@/components/icons/IconArrow.vue';
import CartIcon from '@/components/icons/IconCart.vue';
import vButton from '@/components/Button.vue';
import linkButton from '@/components/linkButton.vue';
import TourCard from '@/components/TourCard.vue';

import course01 from '@/assets/images/course01.jpg';
import course02 from '@/assets/images/course001.jpg';
import course03 from '@/assets/images/course03.jpg';

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
      breakpoints: {
        320: {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        771: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      course: [
        {
          title: 'Open Water',
          desc: '在開闊的海域中盡情探索！參加我們的 open water課程，學習安全而有趣的潛水技巧。在專業教練的指導下，打造獨特的潛水體驗',
          required: '',
          subtitle: '通往探索水底世界的門票',
          name: 'PADI OW 初階開放水域潛水員課程',
          image: course01,
        },
        {
          title: 'Advanced',
          desc: '拓展您的潛水技能，挑戰更深更廣的海域！參加我們的 AOW 課程，學習專業的潛水知識和技巧。征服不同的潛水挑戰，體驗更豐富多樣的海底世界。',
          required: '需有ow證照',
          subtitle: '開啟水底世界的新大門',
          name: 'PADI AOW 進階開放水域潛水員課程',
          image: course02,
        },
        {
          title: 'Enriched Air Diver',
          desc: '用高氧空氣取代標準空氣，可延長免減壓極限，待在水底的時間更久。使用高氧空氣潛水在世界各地已是相當普遍的趨勢。',
          required: '需有ow證照',
          subtitle: '延長免減壓時間的秘密',
          name: 'PADI AOW 進階開放水域潛水員課程',
          image: course03,
        },
      ],
      tour: [
        {
          title: '台北東北角龍洞灣',
          quota: 3,
          total: 6,
          sdate: '2023.01.01',
          edate: '',
          image: './src/assets/images/play03.jpg',
          tags: ['歡迎體驗'],
          depth: '1.00',
        },
        {
          title: '小琉球2天1夜',
          quota: 2,
          total: 8,
          sdate: '2023.03.10',
          edate: '2023.03.11',
          image: './src/assets/images/play01.jpg',
          tags: ['ow', '船潛', '夜潛'],
          depth: '0.8',
        },
        {
          title: '蘭嶼3天2夜',
          quota: 2,
          total: 8,
          sdate: '2023.06.10',
          edate: '2023.06.12',
          image: './src/assets/images/play02.png',
          tags: ['ow', '船潛', '高氧'],
          depth: '0.6',
        },
        {
          title: '帛琉·藍洞5天4夜',
          quota: 4,
          total: 12,
          sdate: '2023.10.10',
          edate: '2023.10.14',
          image: './src/assets/images/play04.webp',
          tags: ['Aow', '船潛', '夜潛', '晨潛'],
          depth: '0.4',
        },
        {
          title: '菲律賓·薄荷島6天5夜',
          quota: 6,
          total: 12,
          sdate: '2023.08.22',
          edate: '2023.08.27',
          image: './src/assets/images/play05.jpg',
          tags: ['Aow', '高氧', '船潛', '夜潛'],
          depth: '0.2',
        },
        {
          title: '日本·沖繩4天3夜',
          quota: 3,
          total: 8,
          sdate: '2023.05.10',
          edate: '2023.05.14',
          image: './src/assets/images/play06.jpg',
          tags: ['歡迎體驗', 'ow', '船潛'],
          depth: '0.1',
        },
      ],
      faq: [
        {
          q: '不會游泳可以潛水嗎？',
          a: '對水肺潛水來說，學員的游泳能力跟學習潛水的能力基本上是沒有直接關係的。水肺潛水是透過水肺裝備讓你能在水下呼吸氣瓶裡的空氣，所以你不需要擔心自己沒辦法換氣，唯一跟潛水有關聯的部分就是，對水的熟悉度。對平時不常接觸水域活動的學員來說，是可以夠過較長的適應期來改善自己心理上的不適感',
        },
        {
          q: '沒有證照可以潛水嗎？',
          a: ' 一般是要考取專業的潛水證照才能進行活動，但如果只是想體驗看看水下世界的感覺，也可以報名我們的潛水體驗活動，會有專業教練帶領體驗水肺潛水。 除了可以暢遊在大海之中，也有機會看到海龜或悠游的魚群唷！',
        },
        {
          q: '水肺潛水危險嗎？',
          a: '水肺潛水本身是一項相對安全的活動，但是如果不遵守安全規定和正確操作程序，潛水就會變得非常危險。為了保障潛水安全，潛水員需要接受正確的培訓和證照，遵守相應的潛水規定和程序，使用正確的潛水裝備和氣體混合物，確保上浮速度適當，定期進行體檢和證照更新，並隨時保持警覺和冷靜。',
        },
        {
          q: '潛水時會被鯊魚咬嗎？',
          a: '潛水時被鯊魚咬的風險是存在的，但實際上發生的概率非常低。大多數鯊魚對人類並不感興趣，只有在受到威脅或激怒時才會攻擊人類。<br><br>(1) 避免潛水時穿著明亮的衣服或使用閃爍的潛水裝備<br>(2) 在潛水時保持冷靜，不要攪擾或追逐鯊魚。<br>(3) 潛水時盡量與潛水伴侶保持在一起，這樣可以互相提供支持和保護。<br><br>雖然被鯊魚攻擊的風險是存在的，但如果潛水員採取相應的預防措施，並且保持冷靜和理性，潛水是可以安全地進行的。',
        },
        {
          q: '在潛水過程中氣瓶沒有氣怎麼辦？',
          a: '我們嚴格規定教練每支氣瓶只能最多用剩下50bar氣體便要終止潛水。每次潛水必須有同行的潛伴，即二人一組，互相幫忙照顧，萬一氣瓶沒有空氣，潛伴會提供後備氣源協助作結束潛水並上升。參加我的們開放水域潛水課程（OW）會教授緊急游泳上升技巧',
        },
      ],
    };
  },
  mounted() {
    // const scene = document.getElementById('scene');
    // new Parallax(scene);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    // gsap.registerPlugin(MotionPathPlugin);
    ScrollTrigger.defaults({
      markers: true,
    });
    // const sections = gsap.utils.toArray('.panel');
    // sections.forEach((eachPanel, i) => {
    //   ScrollTrigger.create({
    //     trigger: eachPanel,
    //     onEnter: () => this.goToSection(i),
    //   });

    //   ScrollTrigger.create({
    //     trigger: eachPanel,
    //     start: '20px bottom',
    //     onEnterBack: () => this.goToSection(i),
    //   });
    //   // gsap.timeline({ paused: true });
    // });
    // this.sectionScroll();
    // const path = [
    //   // 1
    //   { x: 800, y: 200 },
    //   { x: 900, y: 20 },
    //   { x: 1100, y: 100 },
    //   // 2
    //   { x: 1000, y: 200 },
    //   { x: 900, y: 20 },
    //   { x: 10, y: 500 },
    //   // 3
    //   { x: 100, y: 300 },
    //   { x: 500, y: 400 },
    //   { x: 1000, y: 200 },
    //   // 4
    //   { x: 1100, y: 300 },
    //   { x: 400, y: 400 },
    //   { x: 200, y: 250 },
    //   // 5
    //   { x: 100, y: 300 },
    //   { x: 500, y: 450 },
    //   { x: 1100, y: 500 },
    // ];

    // const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
    // const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

    // const scaledPath = path.map(({ x, y }) => {
    //   return {
    //     x: x * rx,
    //     y: y * ry,
    //   };
    // });

    // const sections = [...document.querySelectorAll('.course')];

    // // const rays = document.querySelector('[data-rays]');

    // const lights = [...document.querySelectorAll('[data-lights]')];

    // const lightsTl = gsap.timeline({
    //   scrollTrigger: {
    //     scrub: 6,
    //   },
    // });
    // lightsTl.from(
    //   lights[0],
    //   {
    //     x: window.innerWidth * -1,
    //     y: window.innerHeight,
    //     ease: 'power4.out',
    //     duration: 80,
    //   },
    //   0
    // );
    // lightsTl.to(
    //   lights[0],
    //   {
    //     x: window.innerWidth,
    //     y: window.innerHeight * -1,
    //     ease: 'power4.out',
    //     duration: 80,
    //   },
    //   '-=5'
    // );

    // sections.forEach((section, i) => {
    //   const p = section.querySelector('.course-item');
    //   gsap.to(p, { opacity: 0.5 });

    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'top top',
    //     onEnter: () => this.makeBubbles(p, i),
    //     onEnterBack: () => {
    //       if (i <= 6) {
    //         gsap.to('.bubbles', {
    //           opacity: 1,
    //         });
    //       }
    //     },
    //     onLeave: () => {
    //       this.hideText(p);
    //       if (i == 0) {
    //         gsap.to('.rays', {
    //           opacity: 0,
    //           y: -500,
    //           duration: 8,
    //           ease: 'power4.in',
    //         });
    //       }
    //     },
    //     onLeaveBack: () => this.hideText(p),
    //     // onUpdate: (self) => rotateFish(self)
    //   });
    // });
    // gsap.utils.toArray('.panel').forEach((panel) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top',
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });
    // ScrollTrigger.create({
    //   snap: 1 / 3, // snap whole page to the closest section!
    // });
  },
  methods: {
    makeBubbles(p, i) {
      const fish = document.querySelector('.fish');
      const { top, left } = fish.getBoundingClientRect();

      const bubbles = gsap.timeline();
      bubbles.set('.bubbles__bubble', {
        y: 600,
      });
      bubbles.to('.bubbles__bubble', {
        scale: 1.2,
        y: -300,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
      });
      bubbles.to(
        '.bubbles__bubble',
        {
          scale: 1,
          opacity: 0,
          duration: 1,
        },
        '-=1'
      );
      gsap.to(p, { opacity: 1, duration: 1 });
      gsap.set('.bubbles', {
        x: left,
        y: top,
      });
      if (bubbles.paused) {
        bubbles.restart();
      }
      if (i > 6) {
        gsap.to('.bubbles', {
          opacity: 0,
        });
      }
    },
    hideText(p) {
      gsap.to(p, { opacity: 0, duration: 1 });
    },
    goToSection(i) {
      gsap.to(window, {
        scrollTo: {
          y: i * innerHeight,
          autoKill: false,
          ease: 'Power3.easeInOut',
        },
        duration: 1,
      });
    },
    sectionScroll() {
      // gsap.timeline({ paused: true });
    },
  },
  components: {
    vButton,
    ArrowIcon,
    CartIcon,
    linkButton,
    TourCard,
    Swiper,
    SwiperSlide,
  },
  computed: {},
};
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 300px;
  position: relative;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(20px);
    opacity: 0.5;
  }
}

@keyframes scrollText {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.8;
  }
}

.fish-wrapper {
  --mask: linear-gradient(180deg, rgba(0, 0, 0, 1), transparent);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  perspective: 100rem;
  perspective-origin: center center;
  transform-style: preserve-3d;
  pointer-events: none;
  -webkit-mask-image: var(--mask);
  mask-image: var(--mask);
  z-index: 2;
}

.fish {
  --bodyW: 2rem;
  --o: 0.95;
  --l: 100%;
  --c: hsla(250deg, 50%, var(--l), var(--o, 0.6));
  --size: 10rem;
  position: relative;
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
  transform-origin: center;

  @media (min-width: 1000px) {
    --size: 20rem;
    --bodyW: 4rem;
  }
}

.bubbles {
  position: fixed;
  top: 0;
  left: 25%;
  // transform-style: preserve-3d;
  transform-origin: center;
  transform: translate3d(10rem, 5rem, 0) rotateX(20deg) rotateY(0deg);
}

.bubbles__bubble {
  --c: rgba(255, 255, 255, 0.4);
  --size: 2.5rem;
  position: absolute;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(transparent 30%, var(--c, white)),
    radial-gradient(circle at 100% 0%, transparent 30%, var(--c, white));
  transform-origin: center;
  transform: scale(0);
  opacity: 0;

  &:nth-child(2) {
    --size: 1.8rem;
    top: 3rem;
    left: 2rem;
  }

  &:nth-child(3) {
    --size: 1.2rem;
    top: 6rem;
    left: 0;
  }
}

.rays {
  --r: 10deg;
  --c: rgba(255, 251, 227, 0.2);
  --size: max(60vh, 80rem);
  --mask: radial-gradient(circle at center, black, transparent 50%);
  position: absolute;
  pointer-events: none;
  top: calc(var(--size) * -0.55);
  left: 50%;
  width: var(--size);
  height: var(--size);
  pointer-events: none;

  > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: repeating-conic-gradient(
      var(--c),
      var(--c) var(--r),
      transparent var(--r),
      transparent calc(var(--r) * 2)
    );
    -webkit-mask-image: var(--mask);
    mask-image: var(--mask);
    // animation: raysRotate 120000ms linear infinite;
  }
}

@keyframes raysRotate {
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

/* Lights */
.lights {
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.lights__group {
  position: relative;
  height: 100%;
}

.lights__light {
  --size: 0.35rem;
  width: var(--size);
  height: var(--size);
  position: absolute;
  background: rgba(255, 255, 255, 1);
  border-radius: 100%;
  top: 10%;
  left: 25%;
  filter: blur(0.1rem);
  animation: blink 2500ms var(--d, 0ms) infinite alternate;

  &:nth-child(2) {
    --d: 200ms;
    top: 40%;
    left: 12%;
  }

  &:nth-child(3) {
    --d: 350ms;
    top: 60%;
    left: 18%;
  }

  &:nth-child(4) {
    --d: 600ms;
    top: 25%;
    left: 66%;
  }

  &:nth-child(5) {
    --d: 1210ms;
    top: 43%;
    left: 55%;
  }

  &:nth-child(6) {
    --d: 420ms;
    top: 90%;
    left: 37%;
  }

  &:nth-child(7) {
    --d: 1100ms;
    top: 82%;
    left: 91%;
  }

  &:nth-child(8) {
    --d: 1560ms;
    top: 67%;
    left: 81%;
  }
}

@keyframes blink {
  to {
    opacity: 0;
  }
}
</style>
