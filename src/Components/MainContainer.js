import React from 'react';
import './MyStyles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';


function MainContainer(){
    return (
    <div className="main-container">
        <Sidebar/>
        <Outlet/>

        {/* <CreateGroups/> */}
        {/* <Welcome/> */}

        {/* <ChatArea/> */}

    </div>
    );
}

export default MainContainer;