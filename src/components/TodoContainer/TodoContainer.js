import React, {Component} from "react";
import TodoBlock from "../TodoBlock/TodoBlock";
import "./TodoContainer.css"

class TodoContainer extends Component{

    render() {
        return (
            <div className={"container-fluid todo-container"}>
                <div className="row">
                    <div className="col-lg-3">
                        <TodoBlock />
                    </div>
                    <div className="col-lg-3">
                        <TodoBlock />
                    </div>
                    <div className="col-lg-3">
                        <TodoBlock />
                    </div>
                    <div className="col-lg-3">
                        <TodoBlock />
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoContainer