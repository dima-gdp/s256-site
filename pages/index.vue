<template>
  <div class="wrapper">
    <Header
      :is-mob-menu-opened="isMobMenuOpened"
      @click-burger="toggleMobMenu"
    />
    <main ref="main" class="main-page">
      <HeroSection />
      <UseSection />
      <SpecializationSection />
      <CompetenciesSection />
      <PortfolioSection />
  </main>
  </div>
</template>

<script>
import HeroSection from '~/components/sections/hero/hero-section'
import UseSection from '~/components/sections/use/use-section'
import SpecializationSection from '~/components/sections/specialization/specialization-section'
import CompetenciesSection from '~/components/sections/competencies/competencies-sections'
import PortfolioSection from '~/components/sections/portfolio/portfolio-section'
import Header from '~/components/base/header/header'

export default {
  components: { HeroSection, UseSection, SpecializationSection, Header, CompetenciesSection, PortfolioSection },

  data() {
    return {
      isMobMenuOpened: false,
    }
  },

  mounted() {
    window.addEventListener('wheel', this.replaceVerticalScrollByHorizontal, {
      passive: false,
    })
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.replaceVerticalScrollByHorizontal)
  },

  methods: {
    replaceVerticalScrollByHorizontal(event) {
      if (this.isMobMenuOpened) return

      if (event.deltaY !== 0) {
        event.preventDefault()
        const main = this.$refs.main
        main.scrollTo({
          left: main.scrollLeft + event.deltaY,
          behavior: 'auto',
        })
      }
    },

    toggleMobMenu(isOpened) {
      this.isMobMenuOpened = isOpened
    },
  },
}
</script>

<style lang="scss">
@import '~assets/scss/pages/main-page';
</style>
