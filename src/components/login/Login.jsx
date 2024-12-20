// import React from 'react'
import { useState } from "react";
import "./login.css";

const Login = () => {

    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    });
    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

  return (
    <div className="login">
      <div className="item">
        <h2>Se connecter à son compte </h2>
        <form action="">
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>Connexion</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Creer un compte </h2>
        <form action="">
            <label htmlFor="file">
                <img src={avatar.url || "./avatar.png" } alt="" />
                Choisir une Image
            </label>
            <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder="Nom Complet" name="username"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button>Inscription</button>
        </form>
      </div>
    </div>
  )
}

export default Login
