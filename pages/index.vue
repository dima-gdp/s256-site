<template>
  <div ref="wrap" class="wrap">
    <div class="table">
      <label>
        <span>Скорость: число(0.5, 1, 5)</span>
        <input v-model.number="speed" />
      </label>
      <label>
        <span>behavior: smooth | auto | instant</span>
        <input v-model="behavior" />
      </label>
    </div>

    <div class="section">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum
      recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos
      ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!
    </div>
    <div class="section-1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum
      recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos
      ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!
    </div>
    <div class="section-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, illum
      recusandae? Corporis magni iusto temporibus aliquam harum reiciendis, eos
      ratione ut. Quos earum et debitis maxime porro vitae facilis voluptate!
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      speed: 1,
      behavior: 'auto',
    }
  },

  mounted() {
    const mediaQuery = window.matchMedia('(min-width: 770px)')
    if (mediaQuery.matches) {
      window.addEventListener('wheel', this.replaceVerticalScrollByHorizontal, {
        passive: false,
      })
    }
  },

  methods: {
    replaceVerticalScrollByHorizontal(event) {
      if (event.deltaY !== 0) {
        event.preventDefault()
        const wrap = this.$refs.wrap
        wrap.scrollTo({
          left: wrap.scrollLeft + event.deltaY * this.speed,
          behavior: this.behavior,
        })
      }
    },
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  //position: fixed;
  //width: 100%;
  //height: 100%;
  //top: 0;
  //left: 0;
  //overflow: auto;
  // overflow-y: hidden;
  //  overflow-x: auto;
  // overscroll-behavior: none;
  //height: 100vh;
}

.wrap {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  //height: 3000px;
  overflow-x: scroll;
  overscroll-behavior: none;
}

.section,
.section-1,
.section-2 {
  flex: 0 0 auto;
  min-height: 600px;
  //height: 3000px;
}

.section {
  //width: 2000px;
  //flex: 0 0 2000px;
  background: sandybrown;
}

.section-1 {
  //width: 500px;
  //flex: 0 0 500px;
  background: seagreen;
}

.section-2 {
  //flex: 0 0 2000px;
  //width: 2000px;
  background: slateblue;
}

.table {
  position: fixed;
  top: 100px;
  left: 40px;
  font-size: 18px;
  display: flex;

  label {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 10px;
    font-size: 18px;
  }

  span {
    font-weight: 700;
  }
}
</style>
