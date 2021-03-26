import React from 'react';
import './Sidebar.css';
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutLined from "@material-ui/icons/SearchOutlined";

function Sidebar() {
    return(
        <div className = "sidebar">
            <div className = "sidebar__header">
                <Avatar />
                <div className = "sidebar__headerRight">
                    <IconButton> <DonutLargeIcon /> </IconButton>
                    <IconButton> <ChatIcon /> </IconButton>
                    <IconButton> <MoreVertIcon /> </IconButton>                     
                </div>
            </div>

            <div className = "sidebar_search">
                <div className = "sidebar__searchContainer">
                    <SearchOutLined />
                    <input placeholder = "Search or Start new chat" type = "text" />
                </div>
            </div>

            <div className = "sidebar__chats">
                <SidebarChat  addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
  }

  export default Sidebar