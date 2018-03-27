<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/main">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/anime">
      <span class="tab-link">动画</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/drama">
      <span class="tab-link">番剧</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/country">
      <span class="tab-link">国创</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/music">
      <span class="tab-link">音乐</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{

  }
</script>

<style scoped lang="scss">
  .tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 17px;
    .tab-item{
      flex: 1;
      text-align: center;
      .tab-link{
        padding-bottom: 5px;
        color: #757575
        }
        &.router-link-active .tab-link{
          color: #fb7299
        }
      }
    }
</style>
