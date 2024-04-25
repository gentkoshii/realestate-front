import React, { useState, useEffect } from "react";
import Navbar from '../Components/navbar'
import './admin.scss'

function Admin() {

    const [activeButton, setActiveButton] = useState("button1");

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const Users = [
        {
            userid: "11",
            username:"username123",
            name:"elizabeth",
            email:"username@gmail.com",
            lastlogin:"date",
        }
    ]

    const Posts = [
        {
            id: "1",
            title:"Location",
            price:"24.99",
        }
    ]
    return(
        <div className='adminPage'>
            
            <div className='sidebar'>
                <div className="options">
                    <button onClick={() => handleButtonClick("button1")} className={activeButton === "button1" ? "active" : ""}>Dashboard</button>
                    <button onClick={() => handleButtonClick("button2")} className={activeButton === "button2" ? "active" : ""}>Users</button>                    
                    <button onClick={() => handleButtonClick("button3")} className={activeButton === "button2" ? "active" : ""}>Posts</button>                    
                </div>
            </div>
            <div className="display">
                <div className="logOut">
                    <a href="">
                        <img src="" alt="" />
                        Log Out
                    </a>
                </div>
                <div className="displayContent">
                    {activeButton === "button1" && (
                        <>
                            <p>hello</p>
                        </>
                    )}
                    {activeButton === "button2" && (
                        <>
                <div className="adminPosts">
                {Users.map(u => {
                    return (
                        <div className="users">
                            <p className="pUsers">{u.id}</p>
                            <p className="pUsers">{u.username}</p>
                            <p className="pUsers">{u.name}</p>
                            <p className="pUsers">{u.email}</p>
                            <p className="pUsers">{u.lastlogin}</p>
                        </div>
                    )
                })}
                </div>
            </>
            )}
            {activeButton === "button3" && (
                <>
                    <div className="adminPosts">
                        {Posts.map(p => {
                            return (
                                <div className="posts">
                                    <p className="pPosts">{p.id}</p>
                                    <p className="pPosts">{p.title}</p>
                                    <p className="pPosts">{p.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
                </div>
            </div>    
        </div>
    )
}

export default Admin