import React, {Component} from "react";
import {Tabs, Tab, Modal, Button, Form} from "react-bootstrap"
import TodoTask from "../TodoTask/TodoTask";
import "./TodoBlock.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as common from "../../constants/common"

class TodoBlock extends Component{
    constructor({type}) {
        super();
        this.state = {
            isModalShow: false,
            modalType: common.MODAL_TYPE_CREATE,
            todoType: type,
            tasks: [],
            error: ""
        }
    }

    componentDidMount() {
        let listUrl = "http://localhost:3000/tasks/?type=" + this.state.todoType
        fetch(listUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    let tasks = []
                    if (result.data) {
                        tasks = result.data
                    }
                    this.setState({
                        isLoaded: true,
                        tasks: tasks
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    showModal = (type) => {
        this.setState({
            isModalShow: true,
            modalType: type
        })
    }

    closeModal = () => {
        this.setState({isModalShow: false});
    }

    render() {
        let {tasks} = this.state
        let listTasks = (<></>)
        if (tasks.length > 0) {
             listTasks = tasks.map((task) => {
                 //TODO (anhh): add is_done for this
                return <TodoTask key={task.id} task={task} handleOpenModal={() => this.showModal(common.MODAL_TYPE_EDIT)}/>
            })
        }


        let modalTitle = ""
        switch (this.state.modalType) {
            case common.MODAL_TYPE_CREATE:
                modalTitle = "Create task"
                break
            case common.MODAL_TYPE_EDIT:
                modalTitle = "Edit task"
                break
            default:
                modalTitle = "Create task"
                break
        }
        return (
            <div className={"todo-block"}>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All">
                        {listTasks}
                    </Tab>
                    <Tab eventKey="done" title="Done">
                        {listTasks}
                    </Tab>
                </Tabs>

                <div className={"plus-container"} onClick={() => this.showModal(common.MODAL_TYPE_CREATE)}>
                    <a type={"button"} href={"#0"}>
                        <FontAwesomeIcon icon={"plus"} />
                    </a>
                </div>

                <Modal show={this.state.isModalShow} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title*</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default TodoBlock