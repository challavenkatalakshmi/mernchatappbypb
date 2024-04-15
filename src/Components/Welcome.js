import React from "react";
import logo from '../images/live-chat.png';

function Welcome(){
    return (
        <div className="welcome-container">
            <img src={logo} alt='live chat image' className="welcome-logo"/>
            <p>Vew and text directly to people present in the chat rooms.</p>
        </div>
    )
}

export default Welcome;