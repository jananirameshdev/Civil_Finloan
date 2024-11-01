import React, { useState } from "react";
import loginData from './login.json';
import { useNavigate } from "react-router-dom";

import './NavBar.css'

function Hero() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        userId: "",
        passWord: ""
    });
    function handleSubmit(event) {
        event.preventDefault();


        const user = loginData.members.find((member) => member.userID === data.userId && member.password === data.passWord);

        if (user) {
            setStatus(true);
            setLoading(true);
            setTimeout(() => {
                console.log('Navigating to home page');
                navigate('/home');
            }, 3000);
        } else {
            setStatus(false);
        }
    }
    function handleChange(event) {
        let { name, value } = event.target
        setData({ ...data, [name]: value })
    }
    return (
        <div className="hero">
            <div className="content">
                <div className="acc">
                    <h1> Login to <br /> Your Account</h1>
                </div>
                <div className="welcome">
                    Welcome Back!<br />
                    Please enter your credentials to log in
                </div>
                <div className="fog">
                    <img src="https://i.ibb.co/qCSW4BN/Blue-Smoke-Abstract-PNG-Clipart.png" alt="Blue-Smoke-Abstract-PNG-Clipart" className="smoke" />
                </div>
            </div>
            <div className="vector">
                <img src="https://i.ibb.co/RypRY7q/business-startup.png" alt="business-startup" className="vect" />
            </div>
            <div className="forms">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter Your User ID"
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
                        className="userId"
                        id="userId"
                        value={data.userId}
                        onChange={handleChange}
                        name="userId" />

                    <input type="password"
                        placeholder="Enter Your Password"
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
                        className="pswd"
                        id="pswd"
                        value={data.passWord}
                        onChange={handleChange}
                        name="passWord" />

                    <button type="submit"
                        className="btn btn-primary"
                        style={{
                            width: "230px",
                            height: "40px",
                            outline: "none",
                            border: "none",
                            backgroundColor: "#4461F2",
                            borderRadius: "10px",
                            marginBottom: "40px",
                            color: "#FFFFFF"
                        }}
                    >Login</button>
                    {status === false && data.userId !== "" && <div className="text-error" style={{ color: "red", marginTop: "-37px" }}>Details does not Match with Database</div>}
                    {status === true && data.userId !== "" && <div className="text-success" style={{ color: "green", marginTop: "-37px" }}>Login Successful! please Wait Profile page is Loading...</div>}
                </form>
            </div>
        </div>
    )
}
export default Hero;