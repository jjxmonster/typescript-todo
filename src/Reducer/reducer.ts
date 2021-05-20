type Actions =
   | {
        type: 'add';
        name: string;
     }
   | {
        type: 'remove';
        id: number;
     };

interface Todo {
   // id: number;
   name: string;
   complete: boolean;
}

type State = Array<Todo>;

export const TodoReducer = (state: State, action: Actions) => {
   switch (action.type) {
      case 'add':
         return [...state, { name: action.name, complete: false }];
      case 'remove':
         return state.filter((task, id) => id !== action.id);
      default:
         return state;
   }
};
