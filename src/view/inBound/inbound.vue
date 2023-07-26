<template>
  <div class="outbound">
    <PageTitle />

    <div class="pick-info">
      <Title title="拣货详情">
        <Section
          type="bottom-border"
          v-for="item in detailInfo1"
          :key="item.name"
        >
          <div class="title">
            <span class="left">{{ item.title }}</span>
          </div>
          <Infoitem
            v-for="itemObj in item.obj"
            :key="itemObj.name"
            :label="itemObj.name"
            :value="itemObj.key"
            :width="itemObj.width"
            :type="itemObj.type"
            fontSize="14"
          />
        </Section>
      </Title>
    </div>
    <div class="btngroup">
      <van-button type="primary" @click="handleOutBound('all')"
        >确认收货</van-button
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
const router = useRouter();
import Title from '@/component/Title.vue';
import PageTitle from '@/component/PageTitle.vue';
import Section from '@/component/Section.vue';
import Infoitem from '@/component/Infoitem.vue';
import { showConfirmDialog } from 'vant';
import { detailInfoFormat } from '@/utils';

const infoList = ref({
  asn_no: 'JH2112060001',
  title: '蓄电池总成',
  num: '10',
  nextNum: '20',
});

function formatKey(key) {
  return detailInfoFormat(infoList, key);
}

const detailInfo1 = ref([
  {
    title: formatKey('title'),
    obj: [
      { name: '零件号', key: formatKey('asn_no') },
      { name: '曾用编码', key: formatKey('asn_no') },
      { name: '待收数量', key: formatKey('asn_no'), width: 150 },
      { name: '实收数量', key: formatKey('asn_no'), type: 'input' },
      { name: '入库信息', key: formatKey('asn_no'), type: 'cascader' },
    ],
  },
]);
function handleOutBound(val) {
  showConfirmDialog({
    message: '是否确认整单收货？',
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
}
</script>

<style lang="less" scoped>
.outbound {
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  overflow-y: scroll;
  .pick-info {
    padding: 0.1rem 0.2rem;
    .title {
      font-size: 0.16rem;
      padding: 0.05rem 0;
      font-weight: 600;
    }
  }

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
}
</style>
