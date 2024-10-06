import React from 'react';
import classes from './List.module.css'; // Подключение стилей через модули



const List = ({tasks}) => {
    return (
        <ul className={classes.todoList}>
            {tasks.map((task) => (
                <li className={classes.todoItem} key={task.id}>
                    <span className={classes.todoItemText}>{task.title}</span>
                    <div className="btn-group">
                        <button role="button" className="btn btn-outline-dark btn-sm">Важное</button>
                        <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const ListItem = () => {
    return (
        <div>
            <li className={classes.todoItem}>
                <span className={classes.todoItemText}>Список дел пуст</span>
            </li>
        </div>
    )
}

export { List, ListItem };


