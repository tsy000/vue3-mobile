<template>
  <div class="inBound">
    <PageTitle />
    <Scanning placeholder="请输入拣货单号" @scanningConfirm="toDetail" />
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
</script>

<style lang="less" scoped></style>
