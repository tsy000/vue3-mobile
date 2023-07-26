<template>
  <div class="matrialdetail">
    <PageTitle />

    <div class="pick-info">
      <div class="tip">
        查询到需要出库的物料共<span>13</span>个，单击可选中该物料
      </div>
      <Section
        type="circle"
        @sectionTriger="handleOpt"
        v-for="item in detailInfo1"
        :key="item.name"
      >
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
    </div>
    <div class="btngroup">
      <van-button type="primary" @click="handleAddMatrial()"
        >确认添加</van-button
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
const router = useRouter();
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
    obj: [
      { name: '零件名称', key: formatKey('asn_no') },
      { name: '零件号', key: formatKey('asn_no') },
      { name: '曾用编码', key: formatKey('asn_no') },
      { name: '待收数量', key: formatKey('asn_no') },
    ],
  },
]);
function handleAddMatrial() {
  showConfirmDialog({
    message: '是否确认对该ASN单完成收货？',
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
}
function handleOpt(val) {
  // val=='remove'移除
  // val=='add'新增
}
</script>

<style lang="less" scoped>
.matrialdetail {
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  overflow-y: scroll;
  .pick-info {
    padding: 0.1rem 0.2rem;
    .tip {
      text-align: center;
      padding: 0.1rem 0;
      font-size: 0.13rem;
      span {
        color: red;
      }
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
