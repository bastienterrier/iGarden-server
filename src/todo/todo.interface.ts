enum ToDoState {
  TODO = 'TODO',
  WIP = 'WIP',
  DONE = 'DONE',
}

export interface ToDoInterface {
  title: string;
  state: ToDoState;
  progress: number;
  date: Date;
  description: string;
}
