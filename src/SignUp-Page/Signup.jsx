import { useState } from 'react';
import './Signup.css'

export default function Signup() {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src="./SignUp.png" alt="" />
                </div>
                <div className="form-container">
                    <h1>Sign Up</h1>

                    <div className="input-element">
                        <img src="./usernameIcon.png" alt="User Name Icon" />
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div className="input-element">
                        <img src="./mailIcon.png" alt="Email Icon" />
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="input-element">
                        <img src="./passwordIcon.png" alt="Password Icon" />
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="input-element">
                        <img src="./passwordIcon.png" alt="Confirm Password Icon" />
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                    <div className="button-element">
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>

        </>
    );
}