import { useState } from 'react';
import './Login.css'

export default function Login() {
    const [userName, setuserName] = useState("");

    let handleUsername = (e) => {
        setuserName(e.target.value);
        console.log(userName);
    }

    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src="./login.png" alt="" />
                </div>
                <div className="form-container">
                    <h1>Login</h1>

                    <div className="input-element">
                        <img src="./usernameIcon.png" alt="User Name Icon" />
                        <input type="text" placeholder='Username' onChange={handleUsername} />
                    </div>
                    <div className="input-element">
                        <img src="./passwordIcon.png" alt="Password Icon" />
                        <input type="password" placeholder='Your Password' />
                    </div>
                    <div className="rememberMe-element">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Remember Me</label>
                    </div>
                    <div className="button-element">
                        <button>Log In</button>
                    </div>
                    <div className="otherLogin-element">
                        <p>Or login with</p>
                        <img src="./FacebookIcon.png" alt="Facebook" />
                        <img src="./googleIcon.png" alt="Twitter" />
                        <img src="./xIcon.png" alt="Google" />
                    </div>
                    <div className="signup-element">
                        <p>New? <a href="">Create an account</a> </p>
                    </div>

                </div>
            </div>

        </>
    );
}