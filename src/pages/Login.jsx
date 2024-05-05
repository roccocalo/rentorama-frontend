import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form action="" className="max-w-md mx-auto">
                <input type="email" name="" id="" placeholder="your@email.com" />
                <input type="password" name="" id="" placeholder="password" />
                <button className="primary">Login</button>
                <div className="text-center py-2">
                    Don't have an account yet? <Link to={'/signup'} className="underline text-black">Sign up</Link>
                </div>
            </form>
            </div>
        </div>
    )
}