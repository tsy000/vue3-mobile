<template>
  <div class="title"><span class="title-tip"></span>{{ title }}</div>
  <van-divider :style="{ borderColor: '#ccc' }" />
  <slot></slot>
</template>
<script setup>
defineProps({
  title: String,
});
</script>

<style lang="less" scoped>
.title {
  font-size: 0.16rem;
  .title-tip {
    width: 0.04rem;
    height: 0.22rem;
    float: left;
    background-color: #3189fa;
    margin-right: 0.08rem;
  }
}
.van-divider {
  margin: 0.05rem 0;
}
</style>
