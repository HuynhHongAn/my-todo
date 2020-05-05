import React, {Component} from "react";
import {Tabs, Tab, Modal, Button, Form} from "react-bootstrap"
import TodoTask from "../TodoTask/TodoTask";
import "./TodoBlock.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as common from "../../constants/common"


class TodoBlock extends Component{
    constructor() {
        super();
        this.state = {
            isModalShow: false,
            modalType: common.MODAL_TYPE_CREATE
        }
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
                        <TodoTask handleOpenModal={() => this.showModal(common.MODAL_TYPE_EDIT)}/>
                        <TodoTask handleOpenModal={() => this.showModal(common.MODAL_TYPE_EDIT)}/>
                    </Tab>
                    <Tab eventKey="done" title="Done">
                        <TodoTask handleOpenModal={() => this.showModal(common.MODAL_TYPE_EDIT)}/>
                        <TodoTask handleOpenModal={() => this.showModal(common.MODAL_TYPE_EDIT)}/>
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