<template>
  <div>
    <header class="header">
      <div class="header__container">
        <nuxt-link to="/" class="header__logo logo-header">
          <IconLogo class="logo-header__main" />
          <IconLogoMob class="logo-header__mob" />
        </nuxt-link>

        <ul class="header__list">
          <li v-for="(link, i) in $options.links" :key="i">
            <a href="#">{{ link.name }}</a>
          </li>
        </ul>

        <div class="header__contact header-contact">
          <a href="tel:+78004329394" class="header-contact__phone"
            >8 800 432 93 94</a
          >
          <span class="header-contact__work-time"
            >По будням с 10:00 до 18:00</span
          >
          <IconPhone class="header-contact__phone-icon" />
        </div>

        <div class="header__request request">
          <button class="request__title">Оставить заявку</button>
          <IconEllispse class="request__icon" />
        </div>

        <button
          class="header__burger"
          @click="$emit('click-burger', !isMobMenuOpened)"
        >
          <transition name="fade">
            <IconX v-if="isMobMenuOpened" />
            <IconBurger v-else />
          </transition>
        </button>
      </div>
    </header>

    <transition name="fade">
      <div v-show="isMobMenuOpened" class="mob-menu">
        <div class="mob-menu__container">
          <ul class="mob-menu__list">
            <li v-for="(link, i) in $options.links" :key="i">
              <a href="#">{{ link.name }}</a>
            </li>
          </ul>

          <div class="mob-menu__contacts">
            <a href="tel:+79159101112">+7 915 910 11 12</a>
            <a href="mailto:hello@s256.ru" class="">hello@s256.ru</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  IconLogo,
  IconEllispse,
  IconBurger,
  IconX,
  IconLogoMob,
  IconPhone,
} from '~/components/icons'

export default {
  components: {
    IconLogo,
    IconEllispse,
    IconBurger,
    IconX,
    IconLogoMob,
    IconPhone,
  },

  props: {
    isMobMenuOpened: { type: Boolean, default: false },
  },

  links: [
    {
      name: 'О нас',
      href: '',
    },
    {
      name: 'Команда',
      href: '',
    },
    {
      name: 'Компетенции',
      href: '',
    },
    {
      name: 'Кейсы',
      href: '',
    },
    {
      name: 'Стоимость',
      href: '',
    },
    {
      name: 'Технологии',
      href: '',
    },
  ],
}
</script>

<style lang="scss">
@import 'header';
</style>
