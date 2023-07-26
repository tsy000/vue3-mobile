<template>
  <div
    class="info-item"
    :style="{
      fontSize: fontSize / 100 + 'rem',
      width: width ? width / 100 + 'rem' : '100vw',
    }"
  >
    <div class="inner">
      <div class="left">{{ label }}</div>
      :
      <template v-if="type == 'input'">
        <div class="right">
          <van-field
            v-model="inputVal"
            name="pattern"
            placeholder="正则校验"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
        </div>
      </template>
      <template v-if="type == 'cascader'">
        <div class="right" @click="showCascader">{{ value }}</div>
      </template>
      <template v-if="type == 'text'">
        <div class="right">{{ value }}</div>
      </template>
    </div>
  </div>

  <van-popup v-model:show="show" round position="bottom">
    <van-cascader
      v-model="cascaderValue"
      title="请选择库存信息"
      :options="options"
      @close="show = false"
      @change="onChange"
      @finish="onFinish"
    />
  </van-popup>
</template>
<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  label: String,
  value: String,
  fontSize: {
    type: String,
    default() {
      return '16';
    },
  },
  width: {
    type: String,
  },
  type: {
    type: String,
    default() {
      return 'text';
    },
  },
});
const show = ref(false);
const inputVal = computed(() => {
  return props.value;
});
function showCascader() {
  show.value = true;
}
</script>

<style lang="less" scoped>
.info-item {
  margin-top: 0.05rem;
  display: inline-block;
  width: 100vw;
  &:nth-child(1) {
    margin-top: 0.1rem;
  }
  &:nth-last-child(1) {
    margin-bottom: 0.1rem;
  }
  .inner {
    display: flex;
    vertical-align: middle;
    align-items: center;
    // height: 0.3rem;
    // line-height: 0.3rem;
    .left {
      display: inline-block;
      color: #696969;
      white-space: nowrap;
    }
    .right {
      display: inline-block;

      color: #000;
      .van-cell.van-field {
        padding: 0.03rem;
      }
    }
  }
}
</style>
