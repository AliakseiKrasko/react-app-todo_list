import React from 'react';
import classes from './List.module.css'; // Подключение стилей через модули

class ListItemComponent extends React.Component {
    state = {
        important: false,
        done: false,
    }

    toggleImportant = () => {
        this.setState((prevState) => ({
            important: !prevState.important
        }));
    }

    render() {
        const { tasks } = this.props;
        const { important } = this.state;

        return (
            <ul className={classes.todoList}>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => {
                        let classNames = `${classes.todoItem}`;
                        if (important) {
                            classNames += ` ${classes.todoItemImportant}`;
                        }

                        return (
                            <li className={classNames} key={task.id}>
                                <span className={classes.todoItemText}>{task.title}</span>
                                <div className="btn-group">
                                    <button
                                        role="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={this.toggleImportant}
                                    >
                                        {important ? 'Не важно' : 'Важное'}
                                    </button>
                                    <button role="button" className="btn btn-outline-danger btn-sm">Удалить</button>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <EmptyToDoList />
                )}
            </ul>
        )
    }
}

const EmptyToDoList = () => {
    return (
        <div className={classes.todoItem}>
            <span className={classes.todoItemText}>Список дел пуст</span>
        </div>
    )
}

export { ListItemComponent, EmptyToDoList };



