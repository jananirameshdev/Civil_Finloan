import axios from "axios";
import React, { useEffect, useState } from "react";
import './NavBar.css'
function ProfileScreen() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [updated, setUpdated] = useState({
        id: 0,
        name: "",
        mobileNum: "",
        password: "",
        fullName: ""
    });
    useEffect(() => {
        axios.get("http://localhost:4000/members")
            .then((res) => { setUsers(res.data) })
            .catch((error) => { console.log(error) })
    }, []);
    function findUsers(id) {
        const user = users.find((el) => el.id === id);
        setUpdated(user);
    }

    function updateUsers(event) {
        event.preventDefault();
        axios.put(`http://localhost:4000/members/${updated.id}`, updated)
            .then((res) => {
                const updatedList = users.map((usr) => usr.id === updated.id ? res.data : usr);
                setUsers(updatedList);
                setMessage("Profile Updated Successfully!");
            })
            .catch(() => {
                setMessage("Something went wrong!");
            });
    };
    return (
        <div className="update">
            <img src="https://i.ibb.co/R4zHY9k/student-with-clipboard-and-coins-vector-removebg-preview.png" alt="student-with-clipboard-and-coins-vector-removebg-preview" className="update-image" />
            <form>
                <div className="profileScreen" >
                    <h3 className="updt" style={{ color: "#4461F2", textAlign: "center" }}> Update Profile</h3>
                    <div className="up" style={{ textAlign: "center" }}>
                        <select onChange={(e) => findUsers(e.target.value)}
                            style={{
                                width: "230px",
                                height: "40px",
                                marginBottom: "15px",
                                backgroundColor: "#EAF0F7",
                                borderRadius: "10px",
                                outline: "none",
                                border: "none",
                                textAlign: "center",

                            }} >
                            <option value="" >Select</option>
                            {users.map((usr) => (
                                <option key={usr.id} value={usr.id}>
                                    {usr.id}
                                </option>
                            ))}
                        </select>
                        <br />
                        <input type="text"
                            placeholder="Enter Username"
                            style={{
                                width: "230px",
                                height: "40px",
                                marginBottom: "15px",
                                backgroundColor: "#EAF0F7",
                                borderRadius: "10px",
                                outline: "none",
                                border: "none",
                                textAlign: "center"
                            }}
                            value={updated.name}
                            onChange={(e) =>
                                setUpdated({ ...updated, name: e.target.value })
                            }
                        />
                        <br />
                        <input type="password"
                            placeholder="Enter Password"
                            style={{
                                width: "230px",
                                height: "40px",
                                marginBottom: "15px",
                                backgroundColor: "#EAF0F7",
                                borderRadius: "10px",
                                outline: "none",
                                border: "none",
                                textAlign: "center"
                            }}
                            value={updated.password}
                            onChange={(e) =>
                                setUpdated({ ...updated, password: e.target.value })
                            }
                        />
                        <br />
                        <input type="text"
                            placeholder="Enter Your Mobile Number"
                            style={{
                                width: "230px",
                                height: "40px",
                                marginBottom: "15px",
                                backgroundColor: "#EAF0F7",
                                borderRadius: "10px",
                                outline: "none",
                                border: "none",
                                textAlign: "center"
                            }}
                            value={updated.mobileNum}
                            onChange={(e) =>
                                setUpdated({ ...updated, mobileNum: e.target.value })
                            }
                        />
                        <br />
                        <input type="text"
                            placeholder="Enter Full Name"
                            style={{
                                width: "230px",
                                height: "40px",
                                marginBottom: "15px",
                                backgroundColor: "#EAF0F7",
                                borderRadius: "10px",
                                outline: "none",
                                border: "none",
                                textAlign: "center"
                            }}
                            value={updated.fullName}
                            onChange={(e) =>
                                setUpdated({ ...updated, fullName: e.target.value })
                            }
                        />
                        <br />
                        <button type="submit"
                            onClick={updateUsers}
                            className="btn btn-primary"
                            style={{
                                cursor: "pointer",

                            }}>
                            Update
                        </button>
                        <div style={{ color: message === "Something went wrong!" ? 'red' : 'green' }}>{message}</div>
                    </div>
                </div>
            </form>
            <div className="uptop"></div>
        </div>
    )
}
export default ProfileScreen;