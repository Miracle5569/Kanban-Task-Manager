<script setup lang="ts">
import { ref } from 'vue'
import IconBoard from './icons/IconBoard.vue'
import AppendBoardModal from './modals/AppendBoardModal.vue'

const emit = defineEmits<{
  change: [value: boolean]
}>()

const dil = () => {
  emit('change', true)
}
</script>

<template>
  <button type="button" @click="dil" class="append-board append-board_position">
    <IconBoard /> + Create New Board
  </button>
</template>

<style scoped lang="scss">
@use '../assets/helpers' as *;

.append-board {
  @include resert-button;
  @include flex-center;

  color: var(--color-purple);
  padding-block: 10px;

  &_position {
    padding-right: 20px;
  }
}
</style>
