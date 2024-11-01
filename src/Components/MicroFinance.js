import React from "react";
import './NavBar.css'
function MicroFinance() {
    return (
        <div className="MicroFinance">
            <img src="https://i.ibb.co/hM7xxt2/b6a1e4ae4617a1cc3ddb83a8bb3f27b8-removebg-preview.png" alt="Civil-Finloan-removebg-preview(1)" className="micro-image" />
            <div className="micro-content">
                <h1 className="micro-heading">Micro Finance</h1>
                <p className="micro-subcontent">Motivate the Entrepreneurs across small villages and areas by providing them a better support</p>
                <p style={{ fontWeight: "bold" }}>Type: NA</p>
                <ul>
                    <li >Minimum Amount: ₹1000</li>
                    <li>Maximum Amount: ₹3500</li>
                    <li>Tenure: 2 (days/months)</li>
                </ul>
            </div>
            <div className="mftop"></div>
        </div>
    )
}
export default MicroFinance;