<template>
  <header class="container">
    <div class="flex justify-between">
      <ul class="flex items-center">
        <li class="mr-10 relative h-20">
          <RouterLink class="relative" to="/">
            <img
              class="translate-y-1/2 h-20 relative z-10"
              src="@/assets/logo3.png"
              alt="logo"
            />
          </RouterLink>
        </li>
        <li class="mx-5"><RouterLink to="/">愛潛水</RouterLink></li>
        <li class="mx-5">
          <RouterLink :to="{ name: 'course' }">學潛水</RouterLink>
        </li>
        <li class="mx-5"><RouterLink to="/">行事曆</RouterLink></li>
        <li class="mx-5"><RouterLink to="/">常見問題</RouterLink></li>
      </ul>
      <ul class="flex items-center gap-x-10">
        <li><RouterLink to="/">註冊</RouterLink></li>
        <li><RouterLink to="/">登入</RouterLink></li>
        <li><RouterLink to="/">註冊</RouterLink></li>
        <li class="relative">
          <CartIcon></CartIcon>
          <div
            class="w-4 h-4 bg-white text-blue-40 text-[10px] font-['Roboto'] text-center absolute rounded-full right-0 top-0"
          >
            {{ cartNum }}
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import CartIcon from '@/components/icons/IconCart.vue';

export default {
  name: 'vueHeader',

  components: {
    CartIcon,
  },
  props: {
    cartNum: {
      type: Number,
      default: 0,
    },
  },
};
</script>
