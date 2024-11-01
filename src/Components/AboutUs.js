import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.css'
function AboutUs() {
    const navigate = useNavigate();
    function navigateHome() {
        navigate('/home');
    }

    return (
        <div className="AboutUs">
            <img src="https://i.ibb.co/NKNgmD5/isometric-economy-partner-business-illustration-vector-removebg-preview.png" alt="Civil-Finloan-removebg-preview" className="about-image" />
            <div className="about-content">
                <h1 className="about-heading">Who We Are</h1>
                <p className="about-subcontent">At Civil Finloan, we believe in making finance accessible to everyone. With a strong foundation in trust and transparency, we offer tailored financial solutions to help individuals and businesses meet their goals. Whether you're planning to buy a home, fund an education, or expand your business, our expert team is here to support you every step of the way.</p>
                <br />
                <button type="click"
                    className="btn btn-primary"
                    style={{

                        outline: "none",
                        border: "none",
                        backgroundColor: "#4461F2",
                        borderRadius: "10px",
                        marginBottom: "40px",
                        color: "#FFFFFF"
                    }}
                    onClick={navigateHome}
                >Explore Home</button>
            </div>
            <div className="abtop"></div>
        </div>

    )
}
export default AboutUs