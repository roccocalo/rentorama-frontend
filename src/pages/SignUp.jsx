import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form action="" className="max-w-md mx-auto">
                <input type="text" name="" id="" placeholder="Name" />
                <input type="email" name="" id="" placeholder="your@email.com" />
                <input type="password" name="" id="" placeholder="password" />
                <button className="primary">SignUp</button>
                <div className="text-center py-2">
                    Already have an account? <Link to={'/login'} className="underline text-black">Login</Link>
                </div>
            </form>
            </div>
        </div>
    )
}