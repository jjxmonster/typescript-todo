type Actions =
   | {
        type: 'add';
        task: string;
     }
   | {
        type: 'remove';
        id: number;
     };

interface Todo {
   task: string;
   complete: boolean;
}

type State = Array<Todo>;

export const TodoReducer = (state: State, action: Actions) => {
   switch (action.type) {
      case 'add':
         return [...state, { task: action.task, complete: false }];
      case 'remove':
         return state.filter((task, id) => id !== action.id);
      default:
         return state;
   }
};
