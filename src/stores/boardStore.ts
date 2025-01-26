import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import { v4 as uuidv4 } from 'uuid'
import type { Board } from '@/composable/types'

export const useBoardStore = defineStore('board', () => {
  //Start is initial.
  const kanbanBoard = ref<Array<Board>>([])

  function addNewBoard(newBoard: Board) {
    kanbanBoard.value.push(newBoard)
  }

  return { kanbanBoard, addNewBoard }
})
