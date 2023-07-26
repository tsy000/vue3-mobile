<template>
  <div>
    <!-- <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    /> -->
    <div class="avatar">
      <img
        :src="avatar" />
      <h3>{{userInfo?.nickName}}</h3>
    </div>
    

    <van-cell-group>
      <van-cell icon="setting-o" title="退出登录"  @click="loginOut" />
    </van-cell-group>
  </div>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">工作台</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { showConfirmDialog } from 'vant';
import api from '@/sevices/user'
import { useRouter } from 'vue-router'
import { sStorage } from '@/utils'

const router = useRouter()
const userInfo = sStorage.get('userInfo');
const avatar = userInfo?.avatar || require("@/assets/imgs/avatar.png");

function loginOut () {
  showConfirmDialog({
    message: '是否确认退出登录？',
  })
    .then(async() => {
      // TODO 退出接口
      const con = await api.logout();
      if(con.code == '00000'){
        sStorage.clear();
        router.push('/login')
      }
    })
    .catch((error) => {
      console.log(error);
      if(error.code =='A0230' || error.code == 'A0220'){
        sStorage.clear();
        router.push('/login')
      }
    });
}
</script>

<style lang="less">
.user-poster{
  margin-bottom: 30px;
}
.avatar{
  text-align: center;
  padding: 50px 0px 10px;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
