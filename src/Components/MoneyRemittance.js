import React from "react";
import './NavBar.css'
function MoneyRemittance() {
    return (
        <div className="MoneyRemittance">
            <img src="https://i.ibb.co/x2wcpqg/3711e948384f4552f709ccac7c431cb1-removebg-preview.png" alt="Civil-Finloan-removebg-preview(1)" className="money-image" />
            <div className="money-content">
                <h1 className="money-heading">Money Remittance</h1>
                <p className="money-subcontent">Secure ,simple and most exciting way of your transactions to inter and intra regions. </p>
                <p style={{ fontWeight: "bold" }}>Type: Domestic</p>
                <ul>
                    <li >Minimum Amount: ₹2500</li>
                    <li>Maximum Amount: ₹25000</li>
                    <li>Tenure: NA (days/months)</li>
                </ul>
                <p style={{ fontWeight: "bold" }}> Type: Inward</p>
                <ul>
                    <li>Minimum Amount: ₹5000</li>
                    <li>Maximum Amount: ₹10000</li>
                    <li>Tenure: NA (days/months)</li>
                </ul>
            </div>
            <div className="mrtop"></div>
        </div>
    )
}
export default MoneyRemittance;