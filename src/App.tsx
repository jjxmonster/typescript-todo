import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';

import { TodoReducer } from './Reducer/reducer';

import TasksList from './Components/TasksList';
import Error from './Components/Error';
import NewTask from './Components/NewTask';

///////////////////////////////// S T Y L E ////////////////////////////////////////////
const StyledAppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   background: rgb(23, 23, 35);
   background: linear-gradient(
      0deg,
      rgba(23, 23, 35, 1) 51%,
      rgba(118, 28, 118, 1) 100%
   );
   display: flex;
   flex-direction: column;
   padding: 5% 25%;
`;
const StyledTodoContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 5% 0;
`;
const StyledTitle = styled.h1`
   color: white;
   letter-spacing: 25px;
   font-size: 5vh;
`;
////////////////////////////////////////////////////////////////////////////////////////

type ErrorType = 'Already exist' | 'Too short task' | '';

const App: React.FC = () => {
   const [todos, dispatch] = useReducer(TodoReducer, []);
   const [currentTask, setCurrentTask] = useState<string>('');
   const [errorText, setErrorText] = useState<ErrorType>('');
   const [isError, setIsError] = useState<boolean>(false);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setCurrentTask(e.target.value);
   };

   const handleAddTask = (): void => {
      dispatch({ type: 'add', name: currentTask });
      setCurrentTask('');
      setIsError(false);
   };

   const handleButtonClick = (): void => {
      const isTodoExist = todos.filter(todo => todo.name === currentTask);
      if (isTodoExist.length === 0) {
         if (currentTask.length > 5) handleAddTask();
         else {
            setErrorText('Too short task');
            setIsError(true);
         }
      } else {
         setErrorText('Already exist');
         setIsError(true);
      }
   };

   return (
      <>
         <StyledAppWrapper>
            <GlobalStyles />
            <StyledTitle>TODO</StyledTitle>
            <StyledTodoContainer>
               <NewTask
                  value={currentTask}
                  handleChange={handleInputChange}
                  onClick={handleButtonClick}
               />
               <Error isError={isError} errorText={errorText} />
               <TasksList tasks={todos} />
            </StyledTodoContainer>
         </StyledAppWrapper>
      </>
   );
};

export default App;
