<template>
  <el-pagination background layout="prev, pager, next" :total="totalPages" v-model:currentPage="currentSelectedPage" @current-change="onPageChange">
  </el-pagination>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const currentSelectedPage = computed(() => props.currentPage);
    const onPageChange = (v: number) => {
      emit('change', v);
    }
    return {
      currentSelectedPage,
      onPageChange
    }
  },
})
</script>


<style lang="scss">
.el-pagination.is-background {
  --el-color-primary: #08A6BB;
}
</style>