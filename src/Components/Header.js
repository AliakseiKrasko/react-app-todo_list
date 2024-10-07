import React from 'react';
import classes from './Header.module.css'; // Поправил имя файла

const Header = () => {
    return (
        <div className={classes.header}>
            <h1 className={classes.headerTitle}>Список дел</h1>
            <span className={classes.headerDesc}>3 осталось, 0 сделано</span>
        </div>
    );
}

export default Header;
