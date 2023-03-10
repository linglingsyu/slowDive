<template>
  <span class="countdown font-mono text-xl" ref="countdown">
    <span :style="`--value:${hours}`"></span>:
    <span :style="`--value: ${minutes}`"></span>:
    <span :style="`--value: ${seconds}`"></span>
  </span>
</template>

<script>
export default {
  name: 'countDown',
  data() {
    return {
      timer: null,
      distance: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
    /*
       最初始情况，项目刚打开的时候，这个时候页面是必定没有定时器的，那么逻辑就会走else，这个时候就会注册一个定时器去循环调用相应逻辑代码
       后续有三种情况
          情况一：路由跳转，跳走了，就要清除这个定时器，所以在beforeDestroy钩子中要清除定时器
          情况二：关闭项目，关闭项目了以后，系统就会自动停掉定时器，这个不用管它
          情况三：刷新页面，这个时候vue组件的钩子是不会执行beforeDestroy和destroyed钩子的，所以
                 需要加上if判断一下，若还有定时器的话，就清除掉，所以这个就是mounted钩子的if判断的原因
    */
    if (this.timer) {
      clearInterval(this.timer)
    } else {
      this.timer = setInterval(this.countdown, 1000)
    }
  },
  methods: {
    countdown() {
      // Set the date we're counting down to
      const countDownDate = new Date('March 9, 2023 23:28:00').getTime()

      const now = new Date().getTime()
      if (countDownDate < now) return false
      // Find the distance between now and the count down date
      const distance = countDownDate - now
      this.distance = distance
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // If the count down is finished, write some text
      if (distance < 1000) {
        clearInterval(this.timer)
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
      }
    }
  },
  watch: {
    distance: {
      handler(value) {
        console.log(value)
        if (value < 1000 || value < 0) {
          clearInterval(this.timer)
          this.days = 0
          this.hours = 0
          this.minutes = 0
          this.seconds = 0
        } else {
          // setInterval(this.countdown, 1000)
          this.countdown()
        }
      },
      immediate: true
    }
  },
  beforeUnmount() {
    // clearInterval(this.timer)
  }
}
</script>
