import {React} from 'react';
import PropType from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />    
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: Props.bol.isRequired,
            text: PropType.string.isRequired
        }).isRequired,
    ),
    toggleTodo: PropTypes.func.isRequired
};

