import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");
    const handleEmoji = e =>{
        setText((prev)=>prev + e.emoji);
        setOpen(false);
        // console.log(e);
    }
    // console.log(text);
    

    return (
      <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Josias frero</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message own">
                <div className="texts">
                <img src="theme.png" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fuga repudiandae suscipit ea nihil aperiam cumque dignissimos fugiat autem minus, ipsa amet ullam odit eum assumenda debitis harum blanditiis.</p>
                    <span>1 min ago</span>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input type="text" placeholder="Taper un message ..."
            value={text} onChange={e=>setText(e.target.value)}/>
            <div className="emoji">
                <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
                <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
            </div>
            <button className="sendButton">Envoyer</button>
        </div>
      </div>
    )
  }

export default Chat