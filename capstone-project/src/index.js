import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import ScrollToTop from "./Components/ScrollToTop";
import { AppProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <BrowserRouter>
            <ScrollToTop/>
            <App />
        </BrowserRouter>
    </AppProvider>
);