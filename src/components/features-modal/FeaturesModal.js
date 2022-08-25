import React from "react";
import "./FeaturesModal.css";

const FeaturesModal = () => {
  return (
    <div className="features-modal hide-modal">
      <ul className="features-list">
        <li>
          <img src="/images/icon-todo.svg" alt="todo" />
          <p className="list-text">Todo List</p>
        </li>

        <li>
          <img src="/images/icon-calendar.svg" alt="calendar" />
          <p className="list-text">Calendar</p>
        </li>

        <li>
          <img src="/images/icon-reminders.svg" alt="reminders" />
          <p className="list-text">Reminders</p>
        </li>

        <li>
          <img src="/images/icon-planning.svg" alt="planning" />
          <p className="list-text">Planning</p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesModal;
