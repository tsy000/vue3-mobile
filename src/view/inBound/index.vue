<template>
  <div class="inBound">
    <PageTitle title="收货入库" />
    <Scanning placeholder="请输入ASN配送单号" @scanningConfirm="toDetail" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import PageTitle from '@/component/PageTitle.vue';
import Scanning from '@/component/Scanning.vue';
const router = useRouter();
const delivery_no = ref(null);
function toDetail(val) {
  console.log('999');
  router.push('/inBound/detail');
}
</script>

<style lang="less" scoped></style>
