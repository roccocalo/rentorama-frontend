import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/signup', {
                name,
                email,
                password
            })
        } catch (error) {
            if (error.response.data.messageErr) {
                setErrorMessage(error.response.data.messageErr);
            } else if (error.response.data.errors) {
                setErrorMessage(error.response.data.errors[0].msg);
            }
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form action="" onSubmit={registerUser} className="max-w-md mx-auto">
                <input type="text" name="" id="" value={name} onChange={ev => setName(ev.target.value)} placeholder="Name" />
                <input type="email" name="" id="" value={email} onChange={ev => setEmail(ev.target.value)} placeholder="your@email.com" />
                <input type="password" name="" id="" value={password} onChange={ev => setPassword(ev.target.value)}placeholder="password" />
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <button className="primary">SignUp</button>
                <div className="text-center py-2">
                    Already have an account? <Link to={'/login'} className="underline text-black">Login</Link>
                </div>
            </form>
            </div>
        </div>
    )
}