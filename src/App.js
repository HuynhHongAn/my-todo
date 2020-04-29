import React, {Component} from 'react';

import './App.css';

import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Header />
                <TodoContainer/>
            </div>
        )
    }
}

export default App;
