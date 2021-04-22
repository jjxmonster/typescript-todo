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
   const [currentTask, setCurrentTask] = useState<string>('');
   const [error, setErrorVisibility] = useState(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCurrentTask(e.target.value);
   };

   const handleButtonClick = () =>
      currentTask.length > 5
         ? dispatch({ type: 'add', task: currentTask })
         : setErrorVisibility(true);

   return (
      <>
         <TasksList tasks={todos} />
         <Input handleChange={handleInputChange} />
         <p>{error ? 'too short task!' : null}</p>
         <Button onClick={handleButtonClick} />
      </>
   );
};

export default App;
