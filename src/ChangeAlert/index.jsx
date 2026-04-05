import React from "react";
import { useStorageListener } from "./useStorageListener.jsx";
import "./ChangeAlert.css";

function ChangeAlert({ syncTodos }) {
  const { show, toggleShow } = useStorageListener(syncTodos);

  if (!show) return null;

  return (
    <div className="ChangeAlert-bg">
      <div className="ChangeAlert-container">
        <p>Looks like you have some changes in your Todos list</p>
        <p>Do you want to reload them?</p>
        <button
          className="TodoForm-button TodoForm-button--add"
          onClick={toggleShow}
        >
          Yes!
        </button>
      </div>
    </div>
  );
}

export { ChangeAlert };
