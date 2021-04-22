import React, { useReducer, useState } from 'react';

import { TodoReducer } from './Reducer/reducer';

import TasksList from './Components/TasksList';
import Button from './Components/Button';
import Input from './Components/Input';

const App: React.FC = () => {
   const [todos, dispatch] = useReducer(TodoReducer, []);
   const [currentTask, setCurrentTask] = useState<string>('');
   const [error, setErrorVisibility] = useState(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCurrentTask(e.target.value);
   };

   const handleButtonClick = (): void =>
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
