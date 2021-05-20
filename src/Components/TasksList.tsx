import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

///////////////////////////////// S T Y L E ////////////////////////////////////////////
const StyledListWrapper = styled.ul`
   background: #25273c;
   min-height: 70%;
   margin-top: 5%;
   display: flex;
   flex-direction: column;
`;
const StyledListElement = styled.li`
   height: 15%;
   color: white;
   display: flex;
   flex-direction: row;
   align-items: center;
   > span {
      text-align: start;
      flex: 5;
      font-size: 2.5vh;
   }
   > .list-element-icon {
      flex: 1;
      font-size: 3vh;
   }
   > .list-element-icon:first-child:hover {
      color: green;
   }
   > .list-element-icon:last-child:hover {
      color: red;
   }
`;

////////////////////////////////////////////////////////////////////////////////////////
interface Todo {
   name: string;
   complete: boolean;
}
interface TaskListProps {
   tasks: Array<Todo>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
   const taskList: JSX.Element[] | null =
      tasks.length > 0
         ? tasks.map(task => (
              <StyledListElement>
                 <FontAwesomeIcon
                    className='list-element-icon'
                    icon={faClipboardCheck}
                 />
                 <span>{task.name}</span>
                 <FontAwesomeIcon
                    className='list-element-icon'
                    icon={faTrash}
                 />
              </StyledListElement>
           ))
         : null;
   return <StyledListWrapper>{taskList}</StyledListWrapper>;
};

export default TaskList;
