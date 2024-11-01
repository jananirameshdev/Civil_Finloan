import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState("");
    const [tenure, setTenure] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [emi, setEmi] = useState(null);

    function EmiCals(event) {
        event.preventDefault();
        const monthlyRate = interestRate / (12 * 100);
        const tenureInMonth = tenure * 12;
        const emiResult = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonth)) /
            (Math.pow(1 + monthlyRate, tenureInMonth) - 1);
        setEmi(emiResult.toFixed(2));

    }
    return (
        <div className="EmiCalculator">
            <img src="https://i.ibb.co/Fm6gRNS/2ebabf40dfb6a2449943dcc2259bf70b-removebg-preview.png" alt="Client-signing-a-real-estate-contract-removebg-preview" className="emi-image" />
            <form onSubmit={EmiCals}>
                <div className="EmiCal">
                    <h2 className="emi" style={{ color: "#4461F2" }}> EMI Calculator</h2>
                    <input type="text"
                        placeholder="Enter Loan Amount"
                        style={{
                            width: "230px",
                            height: "40px",
                            marginBottom: "20px",
                            backgroundColor: "#EAF0F7",
                            borderRadius: "10px",
                            outline: "none",
                            border: "none",
                            textAlign: "center"
                        }}
                        className="loan-amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        required
                    />
                    <br />
                    <input type="number"
                        placeholder="Tenure (in years)"
                        style={{
                            width: "230px",
                            height: "40px",
                            marginBottom: "20px",
                            backgroundColor: "#EAF0F7",
                            borderRadius: "10px",
                            outline: "none",
                            border: "none",
                            textAlign: "center"
                        }}
                        min={0}
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        required
                    />
                    <br />
                    <input type="text"
                        placeholder="Interest Rate (annual %)"
                        style={{
                            width: "230px",
                            height: "40px",
                            marginBottom: "20px",
                            backgroundColor: "#EAF0F7",
                            borderRadius: "10px",
                            outline: "none",
                            border: "none",
                            textAlign: "center"
                        }}
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit" className="btn btn-primary" style={{ cursor: "pointer" }}>Sign in </button>
                    <br />
                    {emi && (
                        <div style={{ marginTop: "20px" }}>
                            <h6 style={{ color: "green" }}>Your EMI is: ₹{emi}</h6>
                        </div>
                    )}

                </div>
            </form>
            <div className="emitop"></div>
        </div>
    )
}
export default EmiCalculator;