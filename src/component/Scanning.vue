<template>
  <div class="cont">
    <van-field
      class="inputs"
      v-model.trim="inputsVal"
      :placeholder="placeholder"
    >
      <template #right-icon>
        <span class="iconfont wmsicon-saoma saoma"> </span>
      </template>
    </van-field>
    <van-button
      block
      type="primary"
      native-type="submit"
      :disabled="isDisable"
      @click="handleconfirm"
      v-if="confirmbtn"
    >
      确认
    </van-button>
    <slot name="info"></slot>
    <div class="addbtn" v-if="showAddbtn" @click="handelAddbtn">
      <span class="iconfont wmsicon-add"> </span>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, computed } from 'vue';

defineProps({
  title: String,
  placeholder: String,
  showConfirmBtn: {
    type: Boolean,
    default() {
      return true;
    },
  },
  confirmbtn: {
    type: Boolean,
    default() {
      return true;
    },
  },
  showAddbtn: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
const emit = defineEmits(['scanningConfirm', 'addbtnTrigger']);
const router = useRouter();
const inputsVal = ref(null);

const isDisable = computed(() => {
  return inputsVal.value ? false : true;
});

function handleconfirm() {
  emit('scanningConfirm', inputsVal);
}
function handelAddbtn() {
  emit('addbtnTrigger');
}
</script>

<style lang="less" scoped>
.cont {
  padding: 0.1rem 0.2rem;
  :deep(.inputs) {
    margin-bottom: 0.2rem;
  }
  .addbtn {
    position: relative;

    .wmsicon-add {
      margin-top: 0.1rem;
      float: right;
      color: #1989fa;
      font-size: 0.18rem;
    }
  }
}
</style>
