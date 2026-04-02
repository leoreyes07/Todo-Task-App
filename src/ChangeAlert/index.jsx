import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';


function ChangeAlert({ show, toggleShow }) {
    if (show) {
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
    } else {
        return null;
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener };
