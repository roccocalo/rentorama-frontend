import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";


export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {setUser} = useContext(UserContext);

    async function loginUser(ev) {
        ev.preventDefault();
        try {
            const responseInfo = await axios.post('/login', {
                email,
                password
            })
            console.log(responseInfo)
            setUser(responseInfo.data);
            setRedirect(true);
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.messageErr) {
                setErrorMessage(error.response.data.messageErr);
            } else {
                console.log(error)
            }
            
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form action="" className="max-w-md mx-auto" onSubmit={loginUser}>
                <input type="email" name="" id="" placeholder="your@email.com" value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" name="" id="" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                <button className="primary">Login</button>
                <div className="text-center py-2">
                    Don't have an account yet? <Link to={'/signup'} className="underline text-black">Sign up</Link>
                </div>
            </form>
            </div>
        </div>
    )
}