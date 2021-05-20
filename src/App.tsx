import React, { useReducer, useState } from 'react';

import { TodoReducer } from './Reducer/reducer';

import TasksList from './Components/TasksList';
import Button from './Components/Button';
import Input from './Components/Input';

type ErrorType = 'Already exist' | 'Too short task' | '';

const App: React.FC = () => {
   const [todos, dispatch] = useReducer(TodoReducer, []);
   const [currentTask, setCurrentTask] = useState<string>('');
   const [errorText, setErrorText] = useState<ErrorType>('');
   const [error, setErrorVisibility] = useState<boolean>(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCurrentTask(e.target.value);
   };

   const handleAddTask = (): void => {
      dispatch({ type: 'add', name: currentTask });
      setCurrentTask('');
      setErrorVisibility(false);
   };

   const handleButtonClick = (): void => {
      const isTodoExist = todos.filter(todo => todo.name === currentTask);
      if (isTodoExist.length === 0) {
         if (currentTask.length > 5) handleAddTask();
         else {
            setErrorText('Too short task');
            setErrorVisibility(true);
         }
      } else {
         setErrorText('Already exist');
         setErrorVisibility(true);
      }
   };

   return (
      <>
         <TasksList tasks={todos} />
         <Input value={currentTask} handleChange={handleInputChange} />
         <p>{error ? errorText : null}</p>
         <Button onClick={handleButtonClick} />
      </>
   );
};

export default App;
