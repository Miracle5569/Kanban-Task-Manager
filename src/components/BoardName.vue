<script setup lang="ts">
import { computed } from 'vue'
import { useBoardStore } from '@/stores/boardStore'

const store = useBoardStore()

const countBoards = computed<number>(() => {
  return store.kanbanBoard.length
})
</script>

<template>
  <p class="header__body-count-boards">ALL BOARDS ({{ countBoards }})</p>
</template>

<style scoped lang="scss">
.header__body-count-boards {
  color: var(--color-light-gray);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}
</style>
