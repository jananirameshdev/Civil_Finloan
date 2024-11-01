import React from "react";
import './NavBar.css'
function SmallScale() {
    return (
        <div className="SmallScale">
            <img src="https://i.ibb.co/m8ZcFFJ/ad683a3d764fe9e9988063501b3dcaa1-removebg-preview.png" alt="Civil-Finloan-removebg-preview(1)" className="small-image" />
            <div className="small-content">
                <h1 className="small-heading">Small Scale Business Loans</h1>
                <p className="small-subcontent">Providing loans which designed for your aspirations in starting a business </p>
                <p style={{ fontWeight: "bold" }}>Type: DI Loan</p>
                <ul>
                    <li >Minimum Amount: ₹15000</li>
                    <li>Maximum Amount: ₹100000</li>
                    <li>Tenure: 150 (days/months)</li>
                </ul>
                <p style={{ fontWeight: "bold" }}> Type: MI Loan</p>
                <ul>
                    <li>Minimum Amount: ₹100000</li>
                    <li>Maximum Amount: ₹300000</li>
                    <li>Tenure: 34 (days/months)</li>
                </ul>
            </div>
            <div className="sstop"></div>
        </div>
    )
}
export default SmallScale;