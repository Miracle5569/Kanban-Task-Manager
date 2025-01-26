interface Task {
  taskName: string
  subTasks: Array<string>
  description: string
  status: string
}

interface BoardColumnTask {
  boardId: string
  columnName: string
  tasks: Array<Task>
}

export type Board = {
  boardId: string
  boardName: string
  boardColumn: Array<BoardColumnTask>
}
