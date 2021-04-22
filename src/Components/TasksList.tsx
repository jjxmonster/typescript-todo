import * as React from 'react';

export interface TaskListProps {
   tasks: Array<object>;
}

const TaskList: React.FC<TaskListProps> = tasks => {
   return <div>{JSON.stringify(tasks)}</div>;
};

export default TaskList;
