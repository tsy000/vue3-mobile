<template>
  <div class="setion" :class="type" @click="sectionClick($event)">
    <slot> </slot>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, computed } from 'vue';

defineProps({
  type: {
    type: String,
    default() {
      return 'bottom-border';
    },
  },
});
const router = useRouter();
const emit = defineEmits(['sectionTriger']);

function sectionClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  const isCircle = e.currentTarget.classList.contains('circle');
  if (!isCircle) return;
  const isActive = e.currentTarget.classList.contains('sectionactive');
  if (isActive) {
    // 包含
    e.currentTarget.classList.remove('sectionactive');
    emit('sectionTriger', 'remove');
  } else {
    e.currentTarget.classList.add('sectionactive');
    emit('sectionTriger', 'add');
  }
}
</script>

<style lang="less" scoped>
.setion {
  padding: 0 0.1rem;
  &.bottom-border {
    border-bottom: 0.01rem solid #ccc;
  }
  &.circle {
    border: 1px solid #ccc;
    border-radius: 0.06rem;
  }
  &.sectionactive {
    border: 1px solid #1989fa;
  }
  &.noborder {
    border: 0px;
  }
}
</style>
