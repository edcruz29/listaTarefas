import React from "react";
import "./Task.css";
import { useHistory } from "react-router-dom";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title.replace("/", "-")}`);
  };
  return (
    <div
      className="task__container"
      style={task.completed ? { borderLeft: "6px solid #ff00a0" } : {}}
    >
      <div
        className="task__container--title"
        onClick={() => handleTaskClick(task.id)}
      >
        {task.title}
      </div>
      <div className="task__container__buttons">
        <button
          onClick={() => handleTaskRemove(task.id)}
          className="remove__task"
        >
          <CgClose />
        </button>
        <button className="see__task" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
