import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import Send from "@material-ui/icons/Send";

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(" You typed: ", input);
    }

    return <div className="chat">
        <div className="chat__header">
            <Avatar src = {`https://avatars.dicebear.com/4.5/api/male/${seed}.svg`} />

            <div className="chat__headerInfo">
                <h3> Room name </h3>
                <p> Last seen at ... </p>
            </div>
            <div className="chat_headerRight">
            <IconButton> <SearchOutLined /> </IconButton>
            <IconButton> <AttachFile /> </IconButton>
            <IconButton> <MoreVertIcon /> </IconButton>
            </div>
        </div>

        <div className="chat__body">
            <p className={`chat__message ${true && 'chat__reciever'}`}> 
                <span className="chat__name"> Darsh Patel</span>
                Hello 
                <span className="chat__timestamp"> 4:00 pm </span>
            </p>
            
        </div>

        <div className="chat__footer">
        <InsertEmoticonIcon/>
        <form>
            <input 
                value={input} onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a message" type="text"
            />
            <button onClick={sendMessage} type="submit"> <Send/> </button>
        </form>
        <MicIcon/>
        </div>
            
    </div>
    
}

export default Chat;

