import React from "react";
import "./Header.css"
import MoveT from "../components/movet.png"
import Profile from "../components/profile.png"

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={MoveT} alt="logo"/>
                </a>
            </div>
            <div className="header--profile">
                <a href="/">
                    <img src={Profile} alt="profile"/>
                </a>
            </div>
        </header>
    );
}