import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    function joinNavigate() {
        navigate('/join');
    }
    return (
        <>
            <div id="Home">
                <img src="https://i.ibb.co/0Qv3qqH/Civil-Finloan-removebg-preview.png" alt="Civil-Finloan-removebg-preview" className="home-image" />
                <div className="home-content">
                    <h1 className="home-heading">Your <h1 style={{ color: "#4461F2" }}> Trusted </h1> Partner for Easy <h1 style={{ color: "#4461F2" }}> Finance Solutions</h1></h1>
                    <p className="home-subcontent">Personal loans, home loans, and financial solutions designed to meet your needs—quickly, conveniently, and reliably.</p>
                    <button type="submit"
                        className="btn btn-primary"
                        style={{

                            outline: "none",
                            border: "none",
                            backgroundColor: "#4461F2",
                            borderRadius: "10px",
                            marginBottom: "40px",
                            color: "#FFFFFF"
                        }}
                        onClick={joinNavigate}
                    >Join as a Member</button>
                </div>
            </div>
        </>
    )
}
export default Home;