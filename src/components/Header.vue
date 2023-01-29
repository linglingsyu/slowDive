<template>
  <header class="container mt-10">
    <div class="flex justify-between">
      <ul class="flex items-center">
        <li class="mr-10">
          <RouterLink to="/"><LogoIcon></LogoIcon></RouterLink>
        </li>
        <li class="mx-5"><RouterLink to="/">愛潛水</RouterLink></li>
        <li class="mx-5"><RouterLink to="/">學潛水</RouterLink></li>
        <li class="mx-5"><RouterLink to="/">行事曆</RouterLink></li>
        <li class="mx-5"><RouterLink to="/">常見問題</RouterLink></li>
      </ul>
      <ul class="flex items-center gap-x-10">
        <li><RouterLink to="/">註冊</RouterLink></li>
        <li><RouterLink to="/">登入</RouterLink></li>
        <li><RouterLink to="/">註冊</RouterLink></li>
        <li class="relative"><CartIcon></CartIcon></li>
      </ul>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/IconLogo.vue'
import CartIcon from '@/components/icons/IconCart.vue'
export default {
  name: 'vueHeader',
  components: {
    CartIcon,
    LogoIcon,
  },
}
</script>
