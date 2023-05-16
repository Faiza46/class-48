import './Main.css'
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <p>This is Homepage</p>
            <Footer></Footer>


        </div>
    );
};

export default Main;