import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './NavBar.css'

function JoinMember() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/members")
            .then((res) => {
                setUsers(res.data)
            });
    });
    const [name, setName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    function addUsers(event) {
        event.preventDefault();
        setSuccess("");

        if (name === "" || mobileNum === "" || password === "" || fullName === "") {
            setMessage("please Enter all the field");
        }
        else {
            setMessage("");
            let newUser = { name: name, mobileNum: mobileNum, password: password, fullName: fullName };
            axios.post("http://localhost:4000/members", newUser)
                .then((res) => {
                    setUsers([...users, res.data]);
                    setSuccess('User added successfully');
                })
                .catch((error) => {
                    setMessage("Error adding user");
                });
            setName("");
            setPassword("");
            setMobileNum("");
            setFullName("");
        }
    }
    return (
        <div className="join">
            <img src="https://i.ibb.co/brtcJWy/Client-signing-a-real-estate-contract-removebg-preview.png" alt="Client-signing-a-real-estate-contract-removebg-preview" className="join-image" />
            <form>
                <div className="joinMember">
                    <h2 className="sign" style={{ color: "#4461F2" }}> Sign In</h2>
                    <input type="text"
                        placeholder="Enter Username"
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
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setMessage("")
                        }}
                        className="username"
                    />
                    <br />
                    <input type="password"
                        placeholder="Enter Password"
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setMessage("")
                        }}
                    />
                    <br />
                    <input type="text"
                        placeholder="Enter Your Mobile Number"
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
                        value={mobileNum}
                        onChange={(e) => {
                            setMobileNum(e.target.value);
                            setMessage("")
                        }}
                    />
                    <br />
                    <input type="text"
                        placeholder="Enter Full Name"
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
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                            setMessage("")
                        }}
                    />
                    <br />
                    <button type="submit" onClick={addUsers} className="btn btn-primary" style={{ cursor: "pointer" }}>Sign in </button>
                    {success && <div className="text-success">{success}</div>}
                    {message && <div className="text-danger" >{message}</div>}

                </div>
            </form>
            <div className="top"></div>
        </div>

    )
}
export default JoinMember;