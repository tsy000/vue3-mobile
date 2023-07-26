<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>
<script setup>
import { onBeforeMount } from 'vue';

const setHtmlSize = () => {
  //获取页面宽度
  var winW = document.body.clientWidth;
  //根据页面宽度设置html字体大小。
  document.documentElement.style.fontSize = winW / (375 / 100) + 'px';
  //当页面大小发生改变,重新修正rem为新窗口尺寸的3.75分之一
  window.onresize = function () {
    document.documentElement.style.fontSize =
      document.body.clientWidth / (375 / 100) + 'px';
  };
};
onBeforeMount(() => {
  setHtmlSize();
});
</script>

<style lang="less">
body {
  font-size: 0.14rem;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;

  .app {
    width: 100vw;
    overflow-x: hidden;
  }
}
</style>
