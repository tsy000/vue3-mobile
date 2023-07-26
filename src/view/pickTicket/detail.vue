<template>
  <div class="pick-ticket">
    <PageTitle />
    <div class="pick-info">
      <Title title="拣货单详情">
        <Section type="noborder">
          <Infoitem
            v-for="item in detailInfo"
            :key="item.name"
            :label="item.name"
            :value="item.key"
          />
        </Section>
      </Title>
    </div>
    <div class="pick-info">
      <Title title="物料详情">
        <Section
          type="bottom-border"
          v-for="item in detailInfo1"
          :key="item.name"
        >
          <div class="title">
            <span class="left">{{ item.title }}</span>
            <span class="right"
              ><span class="pre">{{ item.preNum }}</span
              >/<span class="next">{{ item.nextNum }}</span></span
            >
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
      <van-button type="success" @click="outBoundDetail('all')"
        >全部出库</van-button
      >
      <van-button type="primary" @click="outBoundDetail('select')"
        >选择出库</van-button
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
const router = useRouter();
import { detailInfoFormat } from '@/utils';

import Title from '@/component/Title.vue';
import PageTitle from '@/component/PageTitle.vue';
import Section from '@/component/Section.vue';
import Infoitem from '@/component/Infoitem.vue';
const infoList = ref({
  asn_no: 'JH2112060001',
  title: '蓄电池总成',
  num: '10',
  nextNum: '20',
});

function formatKey(key) {
  return detailInfoFormat(infoList, key);
}

const detailInfo = ref([
  { name: '拣货单号', key: formatKey('asn_no') },
  { name: '需求类型', key: formatKey('asn_no') },
  { name: '需求时间', key: formatKey('asn_no') },
]);
const detailInfo1 = ref([
  {
    title: formatKey('title'),
    preNum: formatKey('num'),
    nextNum: formatKey('nextNum'),
    obj: [
      { name: '零件号', key: formatKey('asn_no') },
      { name: '曾用编码', key: formatKey('asn_no') },
      { name: '供应商名称', key: formatKey('asn_no') },
      { name: '供应商编码', key: formatKey('asn_no') },
    ],
  },
]);
function outBoundDetail(val) {
  let path, query;
  if (val == 'all') {
    path = '/pickTicket/outbound';
    query = {};
  } else {
    path = '/pickTicket/scaningoutbound';
    query = {};
  }
  router.push({ path, query });
}
</script>

<style lang="less" scoped>
.pick-ticket {
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  overflow-y: scroll;
  .pick-info {
    padding: 0.1rem 0.2rem;
    .title {
      padding: 0.05rem 0;
      .left {
        font-size: 0.16rem;
        font-weight: 600;
      }

      .right {
        font-size: 0.13rem;

        float: right;
        .pre {
          color: var(--van-button-primary-background);
        }
      }
    }
  }
  .btngroup {
    position: absolute;
    bottom: 0;
    width: 100vw;
    text-align: center;

    padding: 0.15rem 0;
    bottom: 0;
    & button:nth-child(1) {
      margin-right: 0.4rem;
    }
  }
}
</style>
