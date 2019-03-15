import React from 'react';
import PropsTypes from 'prop-types';

const todo = ({onClick, completed, text}) => (
    <li
        onClick{onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
        {text}
    </li>
);

Todo.propsType = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;

