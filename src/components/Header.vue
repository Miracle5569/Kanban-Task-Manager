<script setup lang="ts">
import BoardName from './BoardName.vue'
import IconBoard from './icons/IconBoard.vue'
import KanbanLogo from './KanbanLogo.vue'
import AppendedBoard from './ComponentTemplates/AppendedBoard.vue'
import { useBoardStore } from '@/stores/boardStore'
import AppendNewBoard from './AppendNewBoard.vue'
import { ref } from 'vue'
import AppendBoardModal from './modals/AppendBoardModal.vue'

const store = useBoardStore()

const isActive = ref<boolean>(false)
</script>

<template>
  <header class="dashboard__header header">
    <KanbanLogo />
    <div class="header__body">
      <BoardName />

      <nav class="header__body-board board">
        <ul class="board__list">
          <li class="board__item" v-for="board in store.kanbanBoard">
            <AppendedBoard>
              <template #board><IconBoard />{{ board?.boardName }}</template>
            </AppendedBoard>
          </li>
          <li class="board__item">
            <AppendNewBoard @change="(e) => (isActive = e)" />
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div
    style="
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    "
    v-if="isActive"
  >
    <AppendBoardModal :is-open="isActive" @change="(e) => (isActive = e)" />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/helpers' as *;

$paddingLeftListItem: 30px;
$paddingLeftListItemMinus: -$paddingLeftListItem;

.dashboard__header {
  padding: 20px 0px 0px $paddingLeftListItem;
  height: 100vh;
  background-color: var(--color-dark-alt);
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.header {
  border-right: 1px solid var(--color-dark-gray);
  font-weight: 600;

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
  }
}

.board {
  position: relative;

  &__item {
    position: absolute;
    padding-left: $paddingLeftListItem;
    left: $paddingLeftListItemMinus;
    border-radius: 0 40px 40px 0px;
    min-height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    color: var(--color-light-gray);
    transition-duration: 0.1s;
    width: 100%;

    @include hover {
      cursor: pointer;
      background-color: var(--color-purple);
      color: var(--color-light);

      &:last-child {
        background-color: var(--color-light);
      }
    }
  }
}
</style>
