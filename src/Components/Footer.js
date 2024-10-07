import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <input type="text" placeholder="Что необходимо сделать" className="form-control me-2"/>
            <button type="button" className="btn btn-primary">Добавить</button>
        </div>
    )
}

export default Footer;