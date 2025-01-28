<script setup lang="ts">
import { useBoardStore } from '@/stores/boardStore'
import { ref, computed } from 'vue'
import AppendNewColumn from '../Buttons/AppendNewColumn.vue'
import CreateBoard from '../Buttons/CreateBoard.vue'

const store = useBoardStore()

const props = defineProps({ isOpen: Boolean })

const emit = defineEmits<{
  change: [value: boolean]
}>()

const columns = ref<Array<string>>([])

const appendNewColumn = () => {
  columns.value.push('column')
}

const isColumnIsNotInitial = computed<boolean>(() => {
  return columns.value.length > 0 ? true : false
})

const isOpen = computed<boolean>(() => {
  return props['isOpen']
})

const setCloseModal = () => {
  emit('change', false)
}
</script>

<template>
  <dialog class="form form__dialog" :open="isOpen">
    <h1 class="visually-hidden">Append New Board</h1>
    <h2 class="dialog__title">Add new board</h2>

    <form class="form__content" method="dialog">
      <div class="dialog__body">
        <div class="field">
          <label for="boardName" class="field__title">Board Name</label>
          <input
            type="text"
            class="field__input"
            id="boardName"
            name="boardName"
            placeholder="e.g. Webdesigner"
          />
        </div>
        <div class="dialog__body-field field field_columns">
          <label for="boardColumn" class="field__title">Board Columns</label>
          <ul class="field__column-list" v-if="isColumnIsNotInitial">
            <li class="field__column-item" v-for="column in columns">
              <input
                type="text"
                class="field__input"
                id="boardColumn"
                name="boardColumn"
                placeholder="Enter column name"
                value="test"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="form__action">
        <AppendNewColumn @click="appendNewColumn" />
        <CreateBoard @click="setCloseModal" />
      </div>
    </form>
  </dialog>
</template>

<style scoped lang="scss">
@use '../../assets/helpers' as *;

.form {
  position: absolute;
  top: 0;
  bottom: 0;
  color: var(--color-light);
  background-color: var(--color-dark-alt);
  border: none;
  border-radius: 10px;
  font-weight: 800;
  max-height: 40rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  &__dialog {
    padding: 30px 35px;
    max-width: 30rem;
    width: 100%;
  }

  &__action {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}

.dialog {
  &__title {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
}

.field {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  &__input {
    background-color: transparent;
    border: 1px solid var(--color-dark-gray);
    border-radius: 3px;
    padding: 8px 15px;
    width: 100%;
    color: var(--color-light);
    font-weight: 500;
    transition-duration: 0.3s;

    &:focus {
      outline-style: solid;
      outline-color: var(--color-purple);
    }
  }

  &__column-item {
    margin-bottom: 15px;
  }
}
</style>
