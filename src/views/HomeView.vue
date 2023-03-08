<template>
  <main>
    <section class="h-screen relative overflow-hidden">
      <div class="w-full h-1/2 relative">
        <div
          v-for="item in 3"
          :key="item"
          class="bg-[#38bbf8] w-[200vw] h-[205vw] opacity-30 absolute top-[-75vw] left-1/2 -ml-[100vw] -mt-[95vw] rounded-[43%] animate-[rotate_9000ms_linear_infinite] [&:nth-child(1)]:animate-[rotate_12000ms_linear_infinite] [&:nth-child(2)]:animate-[rotate_15000ms_linear_infinite] [&:nth-child(2)]:opacity-10 &nth-child(2):bg-[#a7a6a6]"
        ></div>
        <!-- <div class="wave"></div>
        <div class="wave"></div> -->
        <div
          class="text-white text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2"
        >
          <h1 class="tracking-widest">
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
      <div class="text-center text-white absolute left-1/2 bottom-1/4">
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
      <section class="container hidden">
        <div
          class="absolute bottom-1/4 left-1/3 -translate-x-1/2 translate-y-1/2 p-6 w-1/2 bg-white rounded-lg rounded-tr-[100px]"
        >
          <h2 class="text-3xl text-blue-40">News</h2>
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

    <div class="bg">
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

        <div>
          <div
            :class="[
              item % 2 === 0
                ? '2xl:mr-[calc((100vw-1320px)/2)] xl:mr-[calc((100vw-1140px)/2)] lg:mr-[calc((100vw-960px)/2)]'
                : '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
            ]"
            v-for="(item, index) in course"
            :key="item.title"
          >
            <h3
              class="text-[150px] leading-[.8] font-light"
              :class="[
                index !== 0
                  ? 'bg-clip-text text-transparent bg2'
                  : 'text-[#cef2fa]',
                item % 2 === 0
                  ? '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
                  : ''
              ]"
            >
              {{ item.title }}
            </h3>
            <div>
              <img
                class="h-[650px] w-full object-cover"
                :class="[
                  item % 2 === 0 ? 'rounded-tr-[100px]' : 'rounded-tl-[100px]'
                ]"
                :src="item.image"
                alt="{{ item.image}}"
              />
              <div
                class="w-9/12 bg-white py-10 px-[110px] -translate-y-1/2"
                :class="[
                  item % 2 === 0
                    ? 'rounded-tl-[50px] ml-auto'
                    : 'rounded-tr-[50px]'
                ]"
              >
                <div
                  class="text-lg text-danger mb-5"
                  v-if="item.required.length"
                >
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
              <div
                class="font-noto flex justify-between items-center mt-3 mb-5"
              >
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
          <li class="border-b border-black-40">
            <label
              class="flex justify-between items-center py-10 cursor-pointer"
            >
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
    </div>
  </main>
</template>

<script>
import ArrowIcon from '@/components/icons/IconArrow.vue'
import CartIcon from '@/components/icons/IconCart.vue'
import vButton from '@/components/Button.vue'
import linkButton from '@/components/linkButton.vue'
export default {
  data() {
    return {
      course: [
        {
          title: 'Open Water',
          desc: '在開闊的海域中盡情探索！參加我們的 open water課程，學習安全而有趣的潛水技巧。在專業教練的指導下，打造獨特的潛水體驗',
          required: '',
          subtitle: '通往探索水底世界的門票',
          name: 'PADI OW 初階開放水域潛水員課程',
          image: './src/assets/images/course01.jpg'
        },
        {
          title: 'Advanced',
          desc: '拓展您的潛水技能，挑戰更深更廣的海域！參加我們的 AOW 課程，學習專業的潛水知識和技巧。征服不同的潛水挑戰，體驗更豐富多樣的海底世界。',
          required: '需有ow證照',
          subtitle: '開啟水底世界的新大門',
          name: 'PADI AOW 進階開放水域潛水員課程',
          image: './src/assets/images/course02.jpg'
        },
        {
          title: 'Enriched Air Diver',
          desc: '用高氧空氣取代標準空氣，可延長免減壓極限，待在水底的時間更久。使用高氧空氣潛水在世界各地已是相當普遍的趨勢。',
          required: '需有ow證照',
          subtitle: '延長免減壓時間的秘密',
          name: 'PADI AOW 進階開放水域潛水員課程',
          image: './src/assets/images/course03.jpg'
        }
      ],
    }
  },
  components: {
    vButton,
    ArrowIcon,
    CartIcon,
    linkButton
  }
}
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
</style>
