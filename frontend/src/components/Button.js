import React from "react";
import { Link } from "react-router-dom"; 

export function Button() {
    return (
        <Link to='/ViewResults'>
            <button className="btn">
                View Results
            </button>
        </Link>
    );
}
