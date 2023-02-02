import {useEffect} from "react";
import './app.css';
import {
    BrowserRouter,
    Route,
    Navigate,
    Routes
} from 'react-router-dom';


const tg = window.Telegram.WebApp;
export default function App() {
    useEffect(() => {
        tg.ready();
    }, [])
    return (
        <BrowserRouter>
            <Routes>

            </Routes>
        </BrowserRouter>
    );
}