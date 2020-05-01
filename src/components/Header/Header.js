import React from "react"
import {ButtonGroup, Button} from "react-bootstrap";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#0">{"Tdo"}</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#0">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Tasks</a>
                        </li>
                    </ul>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Login</Button>
                        <Button variant="secondary">Register</Button>
                    </ButtonGroup>
                </div>
            </nav>

        </div>
    )
}

export default Header