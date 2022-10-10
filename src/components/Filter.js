import React from "react";

function Filter({filter, onToggleFilter}) {

    return (
        <div id="filter-div">
            <button onClick={onToggleFilter} id="good-dog-filter">
                Filter good dogs: {filter ? "On" : "Off"}
            </button>
        </div>
    )
}

export default Filter;