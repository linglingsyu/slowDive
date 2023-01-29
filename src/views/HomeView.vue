<script>
// import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="h-[1520px] relative">
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
    </div>

    <div class="container">
      <div
        class="relative bg-yellow-50 rounded-tr-[100px] min-h-[300px] -translate-y-1/2 after:block after:bg-red-200 after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:-translate-x-1/2 after:-z-10"
      >
        <h2>News</h2>
        <ul class="pr-[110px]">
          <li class="flex items-center font-Roboto">
            <div class="basis-2/12">2023.01.01</div>
            <div class="basis-8/12">菲律賓宿霧薄荷島潛水考證行程開始嘍</div>
            <div class="basis-2/12 text-center">-></div>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div class="max-w-[1608px]">
      <div
        class="relative flex justify-end bg-yellow-50 rounded-tr-[100px] min-h-[300px]"
      >
        <h2>News</h2>
        <ul>
          <li class="flex justify-between font-Roboto">
            <div>2023.01.01</div>
            <div>菲律賓宿霧薄荷島潛水考證行程開始嘍</div>
            <div>-></div>
          </li>
        </ul>
      </div>
    </div> -->
  </main>
</template>
