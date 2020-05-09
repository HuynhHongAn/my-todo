import React, {Component} from "react";
import TodoBlock from "../TodoBlock/TodoBlock";
import "./TodoContainer.css"
import * as taskConst from "../../constants/task"

class TodoContainer extends Component{

    render() {
        return (
            <div className={"container-fluid todo-container"}>
                <div className="row">
                    <div className="col-lg-4">
                        <TodoBlock type={taskConst.TODO_TYPE_HABIT}/>
                    </div>
                    <div className="col-lg-4">
                        <TodoBlock type={taskConst.TODO_TYPE_DAILY}/>
                    </div>
                    <div className="col-lg-4">
                        <TodoBlock type={taskConst.TODO_TYPE_NORMAL}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default TodoContainer