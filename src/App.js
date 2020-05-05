import React, {Component} from 'react';

import './App.css';

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoContainer from "./components/TodoContainer/TodoContainer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash, faEdit, faEllipsisV, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrash, faEdit, faEllipsisV, faSearch, faPlus)

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
                <SearchBar />
                <TodoContainer/>
            </div>
        )
    }
}

export default App;
