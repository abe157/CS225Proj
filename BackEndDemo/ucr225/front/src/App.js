import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Apprecord from "./Components/Apprecord";
import Getbyichem from "./Components/Getbyichem";
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>React Axios Example</h1>
               <Getbyichem />
               <Apprecord />

            </div>
        );
    }
}

export default App;
