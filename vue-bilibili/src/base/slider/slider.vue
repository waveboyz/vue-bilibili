<template lang="html">
  <div class="slider" ref="slider">
    <div class="slider-group">

    </div>
    <div class="dots">

    </div>
  </div>
</template>

<script text="text/ecmascript-6">
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //do something after mounting vue instance
    setTimeout(()=>{
      this._setSliderWidth(),
      this._initSlider
    },20)
  },
  methods: {
    _setSliderWidth() {

    },
    _initSlider
  }
}
</script>

<style lang="css">
</style>
