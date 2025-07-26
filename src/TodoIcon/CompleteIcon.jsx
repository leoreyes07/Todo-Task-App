import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            Color={ completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };