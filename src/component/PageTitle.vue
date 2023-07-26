<template>
  <div class="titel">
    <div class="backarrow">
      <van-icon name="arrow-left" @click="router.go(-1)" />
    </div>
    {{ titles }}
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
console.log(route?.meta?.title);
const props = defineProps({
  title: {
    type: String,
    default() {
      return '';
    },
  },
});
const titles = computed(() => {
  return props.title.length ? props.title : route?.meta?.title || 'meta';
});
</script>

<style lang="less" scoped>
.titel {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.18rem;
  font-weight: 400;
  text-align: center;
  position: relative;
  .backarrow {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.36rem;
  }
}
</style>
