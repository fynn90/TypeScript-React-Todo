interface TodoData {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoTextComponentProp {
  text?:string;
  editing: boolean;
  newTodo: boolean;
  onSave: (val: string) => void;
}

interface TodoTextComponentState {
  text: string;
}

interface FooderComponentProp {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

interface FooderComponentState {
  itemWord: string
}

interface LinkComponentProp {
  active: boolean;
  setFilter: ()=>void;
  children: any
}

interface VisibleTodoListComponentProp {
  filteredTodos: TodoData[];
  actions: any;
}

interface StateInterface {
  todos: TodoData[];
  visibilityFilter: string;
}

interface TodoItemComponentProp {
  todo: TodoData;
  editTodo: ()=>void;
  deleteTodo: (id: number)=>void;
  completeTodo: (id: number)=>void;
}

interface TodoItemComponentState {
  editing: boolean;
}