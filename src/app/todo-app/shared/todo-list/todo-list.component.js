import React from "react";
import { Link } from 'react-router-dom';

const TodoList = ({ todoList, toggleTodo }) => {

    const handleToDoCheckBoxChange = (event, i) => {
        const value = event.target.checked;
        toggleTodo({index: i, value});
    }

    return (
        <ul className="list-group">
            {todoList.map((obj, i) => (
                <li key={i} className="list-group-item">
                    <input
                        name={i}
                        type="checkbox"
                        checked={obj.done}
                        onChange={ e => handleToDoCheckBoxChange(e, i) }
                    />
                    <Link to={`/todo-app/${i}`}>{obj.name}</Link>
                </li>)
            )}
        </ul>
    )
};

export default TodoList;