<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import {getBannerlist} from 'api/mainPage'
export default {
  name: 'App',
  components: {
    MHeader
  },
  created () {
    this._getBannerList()
  },
  methods: {
    _getBannerList () {
      getBannerlist().then((res) => {
        console.log(res.data.list)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
