
interface TodoData {
  id: string;
  title: string;
  completed: boolean;
}

interface HeaderComponentProp {
  editing: boolean;
  newTodo: boolean;
  key: string;
  todo: TodoData;
  onSave: (val: string) => void;
  onDestroy: () => void;
  onEdit: () => void;
  onCancel: (e: React.KeyboardEvent) => void;
  onToggle: () => void;
}

interface HeaderComponentState {
  text: string;
}