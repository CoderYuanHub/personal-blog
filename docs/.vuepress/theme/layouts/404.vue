<script setup lang="ts">
import { useRouteLocale } from '@vuepress/client';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
</script>

<template>
  <div class="theme-container">
    <div class="theme-default-content bg">
      <blockquote>{{ getMsg() }}</blockquote>
      <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .theme-container {
    height: 100vh;
    width: 100%;
    .bg {
      height: 100%;
      width: 100%;
      background: #fff url(../../public/images/404.webp) no-repeat center center;
      background-size: contain;
    }
  }
</style>
