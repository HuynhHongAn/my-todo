import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap"
import TodoTask from "../TodoTask/TodoTask";

class TodoBlock extends Component{

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <TodoTask/>
                    </Tab>
                    {/*<Tab eventKey="profile" title="Profile">*/}
                    {/*    <p>{"text 2"}</p>*/}
                    {/*</Tab>*/}
                    {/*<Tab eventKey="contact" title="Contact">*/}
                    {/*    <p>{"text 3"}</p>*/}
                    {/*</Tab>*/}
                </Tabs>
            </div>
        );
    }
}

export default TodoBlock