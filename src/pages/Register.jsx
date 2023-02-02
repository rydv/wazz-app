import React from 'react';
import Add from "../img/addAvatar.png"

export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">WazzUp</span>
            <span className="title">Register</span>
            <form >
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: "none"}} id="file" type="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}
