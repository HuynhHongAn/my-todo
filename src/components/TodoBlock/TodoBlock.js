import React, {Component} from "react";
import {Tabs, Tab, Modal, Button, Form} from "react-bootstrap"
import TodoTask from "../TodoTask/TodoTask";
import "./TodoBlock.css"

class TodoBlock extends Component{
    constructor() {
        super();
        this.state = {
            isModalShow: false
        }
    }

    showModal = () => {
        this.setState({isModalShow: true})
    }

    closeModal = () => {
        this.setState({isModalShow: false});
    }

    render() {
        return (
            <div className={"todo-block"}>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All">
                        <TodoTask handleOpenModal={this.showModal}/>
                        <TodoTask handleOpenModal={this.showModal}/>
                    </Tab>
                    <Tab eventKey="done" title="Done">
                        <TodoTask handleOpenModal={this.showModal}/>
                        <TodoTask handleOpenModal={this.showModal}/>
                    </Tab>
                </Tabs>

                <Modal show={this.state.isModalShow} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
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