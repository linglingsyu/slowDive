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
      <section class="pt-20">
        <div class="container mb-20">
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
              : '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
          ]"
          v-for="(item, index) in course"
          :key="item.title"
        >
          <h3
            class="text-[100px] leading-[.8] font-light"
            :class="[
              index === 0
                ? 'bg-clip-text text-transparent bg2'
                : 'text-[#cef2fa]',
              index % 2 !== 0
                ? '2xl:ml-[calc((100vw-1320px)/2)] xl:ml-[calc((100vw-1140px)/2)] lg:ml-[calc((100vw-960px)/2)]'
                : ''
            ]"
          >
            {{ item.title }}
          </h3>
          <div
            class="relative -mt-[110px]"
            :class="{ '-my-[110px]': index === course.length - 1 }"
          >
            <img
              class="h-[70vh] w-full object-cover"
              :class="[
                index % 2 !== 0 ? 'rounded-tr-[100px]' : 'rounded-tl-[100px]'
              ]"
              :src="item.image"
              alt="{{ item.image}}"
            />
            <div
              class="w-9/12 bg-white py-10 px-[110px] -translate-y-1/2"
              :class="[
                index % 2 !== 0
                  ? 'rounded-tl-[50px] ml-auto'
                  : 'rounded-tr-[50px]'
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
                  <span><ArrowIcon></ArrowIcon></span>
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
    </div>
    <section class="container mt-[120px] py-20">
      <h2
        class="flex flex-wrap items-center text-black-100 mb-10 lg:mb-15 after:h-px after:bg-black-40 after:flex-grow"
      >
        <span class="text-5xl lg:text-[80px]">Fun Dive</span
        ><span class="text-2xl border-x border-x-black-100 px-5 mx-5"
          >探索海洋</span
        >
      </h2>
      <div class="flex justify-center flex-wrap lg:-mx-3 gap-y-10 mb-8">
        <div
          class="basis-full lg:basis-4/12 px-3"
          v-for="item in tour"
          :key="item"
        >
          <div class="card lg:w-96 bg-white shadow-xl">
            <figure>
              <img
                class="w-full h-[256px] object-cover"
                :src="item.image"
                alt="tours"
              />
            </figure>
            <div class="card-body">
              <div class="flex gap-1 mb-4">
                <div
                  class="badge-md badge-ghost badge"
                  v-for="(tag, idx) in item.tags"
                  :key="'tag' + idx"
                >
                  {{ tag }}
                </div>
              </div>
              <p class="font-Roboto">
                {{ item.sdate }}
                <span v-if="item.edate.length">~ {{ item.edate }}</span>
              </p>
              <h2 class="card-title">
                {{ item.title }}
              </h2>
              <div class="flex items-center justify-between">
                <div
                  class="badge bg-[#dd6969] border-0 text-white text-sm font-Roboto"
                >
                  還有 {{ item.quota }} 名額 / 共 {{ item.total }} 人
                </div>
                <Countdown></Countdown>
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-outline">我要報名</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="block text-center font-noto text-2xl py-10 text-blue-60"
        ><span class="shadow-[0_1px_0_0_#62D5EE]">Read More</span></a
      >
    </section>
    <section class="container pb-[120px] hidden">
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
import Countdown from '@/components/Countdown.vue'
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
          image: './src/assets/images/course001.jpg'
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
      tour: [
        {
          title: '台北東北角龍洞灣',
          quota: 3,
          total: 6,
          sdate: '2023.01.01',
          edate: '',
          image: './src/assets/images/play03.jpg',
          tags: ['歡迎體驗']
        },
        {
          title: '小琉球2天1夜',
          quota: 2,
          total: 8,
          sdate: '2023.03.10',
          edate: '2023.03.11',
          image: './src/assets/images/play01.jpg',
          tags: ['ow', '船潛', '夜潛']
        },
        {
          title: '蘭嶼3天2夜',
          quota: 2,
          total: 8,
          sdate: '2023.06.10',
          edate: '2023.06.12',
          image: './src/assets/images/play02.png',
          tags: ['ow', '船潛', '高氧']
        },
        {
          title: '帛琉·藍洞5天4夜',
          quota: 4,
          total: 12,
          sdate: '2023.10.10',
          edate: '2023.10.14',
          image: './src/assets/images/play04.webp',
          tags: ['Aow', '船潛', '夜潛', '晨潛']
        },
        {
          title: '菲律賓·薄荷島6天5夜',
          quota: 6,
          total: 12,
          sdate: '2023.08.22',
          edate: '2023.08.27',
          image: './src/assets/images/play05.jpg',
          tags: ['Aow', '高氧', '船潛', '夜潛']
        },
        {
          title: '日本·沖繩4天3夜',
          quota: 3,
          total: 8,
          sdate: '2023.05.10',
          edate: '2023.05.14',
          image: './src/assets/images/play06.jpg',
          tags: ['歡迎體驗', 'ow', '船潛']
        }
      ]
    }
  },
  components: {
    vButton,
    ArrowIcon,
    CartIcon,
    linkButton,
    Countdown
  },
  mounted() {}
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
