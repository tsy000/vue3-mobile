<template>
  <div class="home">
    <van-swipe class="goods-swipe" :autoplay="3000" :height="200">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" class="swipe-img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false">
      <van-grid-item
        v-for="item in deskList"
        :key="item.icon"
        :text="item.text"
        :to="item.path"
        :badge="item.badge"
      >
        <template #icon>
          <i :class="['iconfont', 'homeicon', item.icon]"></i>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">工作台</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { reactive, ref } from 'vue';
const deskList = reactive([
  {
    icon: 'wmsicon-xinruku',
    text: '收货入库',
    path: '/inBound',
  },
  {
    icon: 'wmsicon-xinchuku',
    text: '拣货出库',
    path: '/pickTicket',
  },
  // {
  //   icon: 'wmsicon-paichesonghuodan',
  //   text: 'ASN单管理',
  //   // path: '/good',
  //   badge: '开发中',
  // },
  // {
  //   icon: 'wmsicon-pickinglist',
  //   text: '拣货单管理',
  //   // path: '/good',
  //   badge: '开发中',
  // },
  // {
  //   icon: 'wmsicon-chukudan',
  //   text: '出库单管理',
  //   // path: '/good',
  //   badge: '开发中',
  // },
  // {
  //   icon: 'wmsicon-rukudan',
  //   text: '入库单管理',
  //   // path: '/good',
  //   badge: '开发中',
  // },
]);
const goods = ref({
  title: '美国伽力果（约680g/3个）',
  price: 2680,
  express: '免运费',
  remain: 19,
  thumb: [
    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg',
  ],
});
</script>

<style lang="less" scoped>
.home {
  .swipe-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :deep(.van-grid) {
    margin-top: 0.1rem;
  }
  :deep(.van-grid-item__content) {
    background-color: transparent;
    .van-grid-item__text {
      font-size: 0.12rem;
    }
    .van-badge__wrapper {
      margin-bottom: 0.08rem;
      .homeicon {
        font-size: 0.3rem;
        color: #10a5f6;
      }
    }
  }
}
</style>
