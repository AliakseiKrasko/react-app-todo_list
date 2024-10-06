import './App.css';
import Img from './Components/Img';
import Header from './Components/header/Header';
import Search from './Components/search/Search';
import {List} from './Components/list/List';
import {ListItem} from "./Components/list/List";
import Footer from './Components/footer/Footer';

function App() {
    const tasks = [
        {id: 1, title: 'Выпить кофе', status: false},
        {id: 2, title: 'Сделать React приложение', status: false},
        {id: 3, title: 'Позавтракать', status: false},
    ];
    return (
        <div className="todo-app p-5">
            <Img/>
            <Header/>
            <Search/>
            {tasks.length === 0 ? (
                <ListItem />
            ) : (
                <List tasks={tasks} />
            )}
            <Footer/>
        </div>
    );
}


export default App;
