import { useState } from 'react'
import './chatList.css'

const ChatList = () =>{
    const [addMode,setAddMode] = useState(false)
    return(
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder='Rechercher' />
                </div>
                <img src={addMode ? "./minus.png" :"./plus.png"} alt="" className='add' onClick={()=>setAddMode(prev=>!prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Josias Frero</span>
                    <p>Salut bro</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Asaph Allemagne</span>
                    <p>Hello how are you ?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Divine france</span>
                    <p>Salut comment tu vas?</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Princcesse canada</span>
                    <p>yo frero how</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList