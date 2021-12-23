import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Static from './components/Static';
import Countries from "./components/Countries";
import Shop from "./components/Shop";

function App() {

    return (
        <div className="bg-dark">
            <header className="container bg-light pb-3">
                <h2>Hello</h2>
                <nav>
                    <Link to={"/"} className={'btn btn-success mx-3'}>Main</Link>
                    <Link to={"/shop"} className={'btn btn-success mx-3'}>Shop</Link>
                    <Link to={"/about"} className={'btn btn-success mx-3'}>About</Link>
                    <Link to={"/contact-us"} className={'btn btn-success mx-3'}>Contact Us</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Countries />}></Route>
                    <Route path="shop" element={<Shop />}></Route>
                    <Route path="about" element={<Static title={'About'}/>}></Route>
                    <Route path="contact-us" element={<Static title={'Contact Us'}/>}></Route>
                </Routes>

            </header>
        </div>
    );
}

export default App;
