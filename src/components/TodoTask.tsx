import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <table className="task-table">
        <tr>
          <th>Task Name</th>
          <th>Task due date</th>
          <th>Edit Task</th>
          <th>Mark Complete</th>
        </tr>
        <tr>
            <td>{task.taskName}</td>
            <td>{task.deadline}</td>
            <td>edit button coming soon</td>
            <td><button onClick={() => {
                completeTask(task.taskName)
            }}>Complete (deletes task for now)</button></td>
        </tr>
      </table>
      
    </div>
  );
};

export default TodoTask;
