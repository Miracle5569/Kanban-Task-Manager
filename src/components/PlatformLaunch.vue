<script setup lang="ts"></script>

<template>
  <div class="main__platform-launch platform">
    <span class="platform__title">Platform Launch</span>
    <div class="platform__actions">
      <button type="button" class="platform__actions--new-task">+ Add new Task</button>
      <div class="platform__actions-more">
        <span class="visually-hidden">More tools</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main__platform-launch {
  width: 100%;
  display: flex;
  justify-content: space-between;

  background-color: var(--color-dark-alt);
  padding: 30px 20px;
}
</style>
