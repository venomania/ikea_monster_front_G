import React from "react";
import "./Godcard.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Godcard = () => {
    localStorage.clear();
    return (
        <div className="parallax fond">
            <h1>Payment Successful</h1>
            <a href="/">
                <h5>Retoure Boutique</h5>
                </a>
        </div>
    )
}

export default Godcard;