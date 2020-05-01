import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./SearchBar.css"

class SearchBar extends React.Component {
    render() {
        return (
            <div className={"search-container"}>
                <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                    <FontAwesomeIcon icon={"search"} />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                           aria-label="Search"/>
                </form>
            </div>

        )
    }
}

export default SearchBar