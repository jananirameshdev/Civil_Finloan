import React from "react";
import './NavBar.css'
function WealthManagement() {
    return (
        <div className="WealthManagement">
            <img src="https://i.ibb.co/fDfzb4W/822078ee17bdbeaafa9886ea81be6527-removebg-preview.png" alt="Civil-Finloan-removebg-preview(1)" className="wealth-image" />
            <div className="wealth-content">
                <h1 className="wealth-heading">Wealth Management</h1>
                <p className="wealth-subcontent">We providing significant services for your betterment of your wealth management by experts</p>
                <ul className="wealth-ul">
                    <li >DEMAT</li>
                    <li>PAN</li>
                    <li>NPS</li>
                </ul>
            </div>
            <div className="wmtop"></div>
        </div>
    )
}
export default WealthManagement;