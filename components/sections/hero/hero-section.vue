<template>
  <section class="hero container">
    <h1 class="hero__title text-h1">
      <span>Мы Создаём</span>
      <span>Надёжные и красивые</span>
      <span>Веб-сайты и сервисы</span>
    </h1>

    <div class="hero-cursor">
      <IconMouse class="hero-cursor__mouse" />
      <IconChevronRight class="hero-cursor__arrows" />
    </div>

    <div class="hero__bg">
      <picture>
        <img src="~/assets/images/hero-bg.png" alt="" />
      </picture>
    </div>
  </section>
</template>

<script>
import { IconMouse, IconChevronRight } from '~/components/icons'

export default {
  components: {
    IconMouse,
    IconChevronRight,
  },
}
</script>

<style lang="scss">
@import 'hero-section';
</style>
