// import './App.css';
import React from "react";
import Main from "components/Main/Main";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.scss";

function App() {
    return (
        <Router className="App">
            <Main/>
        </Router>
    );
}

export default App;
