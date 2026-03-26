import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
        <div>
            <p>Change Alert</p>
            <button
                onClick={toggleShow}
            >
                Reload info
            </button>
        </div>);
    } else {
        return null;
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener };
