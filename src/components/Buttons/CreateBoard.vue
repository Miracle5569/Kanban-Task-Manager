<script setup lang="ts"></script>

<template>
  <button type="submit" class="create-board">Create new Board</button>
</template>

<style scoped lang="scss">
@use '../../assets/helpers' as *;

.create-board {
  @include action-button(_, var(--color-purple), var(--color-light), 15px);
}
</style>
