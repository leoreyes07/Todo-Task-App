import React from "react";
import { TodoIcon } from './';

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            Color="gray"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon }