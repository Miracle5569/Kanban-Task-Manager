<script setup lang="ts">
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div id="app" class="dashboard">
    <Header />
    <Main />
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
