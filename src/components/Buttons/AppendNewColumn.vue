<script setup lang="ts"></script>

<template>
  <button type="button" class="btn-create">+ Add new Column</button>
</template>

<style scoped lang="scss">
@use '../../assets/helpers' as *;

.btn-create {
  @include action-button(_, var(--color-light), var(--color-purple), 15px);
}
</style>
