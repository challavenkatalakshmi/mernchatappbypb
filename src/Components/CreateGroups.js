import React from "react";
import {IconButton} from '@mui/material';
import DoneOutlineRounded from "@mui/icons-material/DoneOutlineRounded";

function CreateGroups(){
    return (
        <div className="createGroups-container">
            <input placeholder='Enter Group Name' className='search-box'/>
            <IconButton>
                <DoneOutlineRounded/>
            </IconButton>
            
        </div>
    )
}

export default CreateGroups;