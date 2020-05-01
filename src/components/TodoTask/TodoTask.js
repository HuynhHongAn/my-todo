import React from "react";
import {Dropdown} from "react-bootstrap"

import "./TodoTask.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TodoTask extends React.Component {
    render() {
        return (
            <div className={'todo-task'}>
                <div className={"todo-task-content"} onClick={this.props.handleOpenModal}>
                    <div className={"task-title"}>Research project</div>
                    <div className={"task-desc"}>Go to the product source Go to the product source</div>
                </div>

                <div className={"task-options"}>
                    <Dropdown drop={"down"}>
                        <Dropdown.Toggle variant={"default"}>
                            <FontAwesomeIcon icon={"ellipsis-v"} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={this.props.handleOpenModal}>
                                <FontAwesomeIcon icon={"edit"}/>
                                <span className={"option-text"}>Edit</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={this.props.handleOpenModal}>
                                <FontAwesomeIcon icon={"trash"}/>
                                <span className={"option-text"}>Delete</span>
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }



}

export default TodoTask