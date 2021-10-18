import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";
const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back__button__container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task__datails__container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          officia temporibus atque hic voluptatem perspiciatis id. Est nesciunt
          vitae sint quis itaque, nisi facilis rem ipsa eligendi illo hic modi?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
