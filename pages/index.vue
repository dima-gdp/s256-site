<template>
  <main ref="main" class="main-page">
    <HeroSection />
    <UseSection />
    <SpecializationSection />
  </main>
</template>

<script>
import HeroSection from '~/components/sections/hero/hero-section'
import UseSection from '~/components/sections/use/use-section'
import SpecializationSection from '~/components/sections/specialization/specialization-section'

export default {
  components: { HeroSection, UseSection, SpecializationSection },
  data() {
    return {}
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
      if (event.deltaY !== 0) {
        event.preventDefault()
        const main = this.$refs.main
        main.scrollTo({
          left: main.scrollLeft + event.deltaY,
          behavior: 'auto',
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import '~assets/scss/pages/main-page';
</style>
