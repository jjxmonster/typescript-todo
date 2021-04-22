import React, { useReducer, useState } from 'react';

import TasksList from './Components/TasksList';
import Button from './Components/Button';
import Input from './Components/Input';

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

const TodoReducer = (state: State, action: Actions) => {
   switch (action.type) {
      case 'add':
         return [...state, { task: action.task, complete: false }];
      case 'remove':
         return state.filter((task, id) => id !== action.id);
      default:
         return state;
   }
};

const App: React.FC = () => {
   const [todos, dispatch] = useReducer(TodoReducer, []);
   const [currenTask, setCurrentTask] = useState<String>();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCurrentTask(e.target.value);
   };

   return (
      <>
         <TasksList tasks={todos} />
         <Input handleChange={handleInputChange} />
         {/* <Button
         // onClick={() => {
         //    // dispatch({ type: 'add', task: task });
         // }}
         /> */}
      </>
   );
};

export default App;
