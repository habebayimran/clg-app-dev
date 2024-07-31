// import React, { useState } from 'react';
// import axios from 'axios';
// import './RegisterForm.css';
// import video2 from '../assets/video2.mp4';

// const RegisterForm = () => {
//     const [email, setEmail] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handlePasswordChange = (event) => {
//         setConfirmPassword(event.target.value);
//         if (event.target.value !== password) {
//             setPasswordError('Passwords do not match');
//         } else {
//             setPasswordError('');
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/users', {
//                 email,
//                 firstName,
//                 lastName,
//                 password
//             });
//             alert('Registered Successfully');
//             setEmail('');
//             setFirstName('');
//             setLastName('');
//             setPassword('');
//             setConfirmPassword('');
//         } catch (error) {
//             alert('Registration failed');
//         }
//     };

//     return (
//         <div id='RegisterBody'>
//             <video autoPlay loop muted className="background-video">
//                 <source src={video2} type='video/mp4' />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="RegisterContainer">
//                 <h1 id='RegisterTitle'>REGISTER</h1>
//                 <hr />
//                 <br />
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <input
//                             type='text'
//                             value={firstName}
//                             placeholder='FIRST NAME'
//                             onChange={(e) => setFirstName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='text'
//                             value={lastName}
//                             placeholder='LAST NAME'
//                             onChange={(e) => setLastName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='email'
//                             value={email}
//                             placeholder='EMAIL (USER NAME)'
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='password'
//                             value={password}
//                             placeholder='PASSWORD'
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='password'
//                             value={confirmPassword}
//                             placeholder='RE-ENTER PASSWORD'
//                             onChange={handlePasswordChange}
//                             required
//                         />
//                     </div>
//                     {passwordError && <p className="error">{passwordError}</p>}
//                     <br />
//                     <button type='submit'>REGISTER</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default RegisterForm;


import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import video2 from '../assets/video2.mp4';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/users', {
                email,
                firstName,
                lastName,
                password
            });
            alert('Registered Successfully');
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            alert('Registration failed');
        }
    };
    
    return (
        <div id='RegisterBody'>
            <video autoPlay loop muted className="background-video">
                <source src={video2} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className="RegisterContainer">
                <h1 id='RegisterTitle'>REGISTER</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={firstName}
                            placeholder='FIRST NAME'
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            value={lastName}
                            placeholder='LAST NAME'
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            value={email}
                            placeholder='EMAIL (USER NAME)'
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div>
                        <input
                            type='password'
                            value={confirmPassword}
                            placeholder='RE-ENTER PASSWORD'
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    {passwordError && <p className="error">{passwordError}</p>}
                    <br />
                    <button type='submit'>REGISTER</button>
                    <p className='login'>Don't have an Account? &nbsp;
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
