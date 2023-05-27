import React, { useState } from 'react';
import '../Style/Style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const loginDeatils = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    const handleSubmit = () => {
        console.log(`Email: ${email}, Password: ${password}`);
        if (email === 'abc@gmail.com' && password === 'pass123') {
            navigate('/UserList');
        }
        else {
            alert('Enter correct email and password');
        }
    };

    return (
        <div className='Login'>
            <h1>Login</h1>
            <div id="box">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={loginDeatils}
                        placeholder='Enter Email(abc@gmail.com)'
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={loginDeatils}
                        placeholder='Enter Password(pass123)'
                    />
                    <br />
                    <button type="button" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
