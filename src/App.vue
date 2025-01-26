<script setup lang="ts">
import KanbanLogo from './components/KanbanLogo.vue'
import BoardName from './components/BoardName.vue'
import IconBoard from './components/icons/IconBoard.vue'
</script>

<template>
  <div class="dashboard">
    <header class="dashboard__header header hidden-mobile">
      <KanbanLogo />
      <div class="header__body">
        <BoardName />

        <nav class="header__body-navigation navigation">
          <ul class="navigation__list">
            <li class="navigation__item"><IconBoard /> Launch</li>
            <li class="navigation__item"><IconBoard /> Marketing Plan</li>
            <li class="navigation__item"><IconBoard /> Roadmap</li>
            <li class="navigation__item">
              <button type="button" class="navigation__item navigation__item_create-board">
                <IconBoard /> + Create New Board
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="dashboard__main main">Main content</main>
  </div>
</template>

<style scoped lang="scss">
@use './assets/helpers' as *;

$paddingLeftListItem: 30px;
$paddingLeftListItemMinus: -$paddingLeftListItem;

.dashboard {
  display: inline-flex;

  &__header {
    padding: 20px 0px 0px $paddingLeftListItem;
    height: 100vh;
    background-color: var(--color-dark-alt);
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }
}

.header {
  border-right: 1px solid var(--color-dark-gray);
  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-right: 80px;
    width: 100%;
  }
}

.navigation {
  &__item {
    width: 90%;
    border-radius: 0 40px 40px 0px;
    min-height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    color: var(--color-light-gray);

    @include hover {
      cursor: pointer;
      background-color: var(--color-purple);
      color: var(--color-light);

      &::before {
        content: '';
        position: absolute;
        left: $paddingLeftListItemMinus;
        min-width: $paddingLeftListItem;
        height: 100%;
        top: 0;
        background-color: var(--color-purple);
        z-index: 0;
      }
    }

    &_create-board {
      @include resert-button;
      width: 100%;

      color: var(--color-purple);
    }

    // &_is-active {
    //   background-color: var(--color-purple);

    //   &::before {
    //     content: '';
    //     position: absolute;
    //     left: $paddingLeftListItemMinus;
    //     // min-width: 30px;
    //     height: 100%;
    //     top: 0;
    //     background-color: var(--color-purple);
    //   }
    // }
  }
}
</style>
