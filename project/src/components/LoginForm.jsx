import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';
import video2 from '../assets/video2.mp4';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/users?email=${username}`);
            const users = response.data;
            if (users.length > 0 && users[0].password === password) {
                alert(`Logged in as: ${users[0].email}`);
                navigate('/dashboard', { replace: true }); // Use navigate function
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            alert('An error occurred while logging in');
        }
    };

    return (
        <div id='LoginBody'>
            <video autoPlay loop muted className="background-video">
                <source src={video2} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='LoginContainer'>
                <h1 id='LoginTitle'>LOGIN</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={username}
                            placeholder='USER NAME'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            value={password}
                            placeholder='PASSWORD'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <br />
                    <button type='submit'>LOGIN</button>
                    <p className='Sign-up'>Don't have an Account? &nbsp;
                        <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;