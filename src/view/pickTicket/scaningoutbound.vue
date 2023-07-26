<template>
  <div class="inBound">
    <PageTitle />
    <Scanning
      placeholder="请扫码"
      :showAddbtn="true"
      :confirmbtn="false"
      @scanningConfirm="toDetail"
      @addbtnTrigger="handleAddbtn"
    />
    <div class="btngroup">
      <van-button type="primary" @click="handleOutBound('all')"
        >确认出库</van-button
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import PageTitle from '@/component/PageTitle.vue';
import Scanning from '@/component/Scanning.vue';
const router = useRouter();

function toDetail(val) {
  console.log('999');
  router.push('/pickTicket/detail');
}
function handleAddbtn() {
  router.push('/pickTicket/outmatrialDetail');
}
</script>

<style lang="less" scoped>
.btngroup {
  width: 100vw;
  text-align: center;
  position: fixed;
  padding: 0.15rem 0;
  bottom: 0;
  .van-button {
    width: 80vw;
  }
}
</style>
